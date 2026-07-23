import { redirect } from "next/navigation";

/** Legacy odd slug — permanent redirect to canonical premium support. */
export default function PremiumSupport1RedirectPage() {
  redirect("/wordpress/premium-support");
}
