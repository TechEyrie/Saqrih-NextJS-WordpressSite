import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lockPath = path.join(root, ".next", "dev", "lock");
const projectName = path.basename(root);

function removeLock() {
  try {
    fs.unlinkSync(lockPath);
    console.log("Removed .next/dev/lock");
  } catch {
    // already gone
  }
}

function killWindows() {
  try {
    const output = execSync(
      `powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \\"name = 'node.exe'\\" | Where-Object { $_.CommandLine -like '*${projectName}*' } | Select-Object -ExpandProperty ProcessId"`,
      { encoding: "utf8" },
    );
    for (const pid of output.trim().split(/\s+/).filter(Boolean)) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`Stopped process ${pid}`);
      } catch {
        // already exited
      }
    }
  } catch {
    // no matching processes
  }

  try {
    const netstat = execSync("netstat -ano | findstr :3000", { encoding: "utf8" });
    const pids = new Set();
    for (const line of netstat.split("\n")) {
      const match = line.trim().match(/\s+(\d+)\s*$/);
      if (match) pids.add(match[1]);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`Freed port 3000 (PID ${pid})`);
      } catch {
        // ignore
      }
    }
  } catch {
    // port already free
  }
}

function killUnix() {
  try {
    execSync("lsof -ti:3000 | xargs kill -9 2>/dev/null", { shell: true, stdio: "ignore" });
  } catch {
    // port already free
  }
}

removeLock();
if (process.platform === "win32") {
  killWindows();
} else {
  killUnix();
}
