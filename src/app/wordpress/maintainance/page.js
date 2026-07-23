import { redirect } from "next/navigation";

/** Legacy typo slug — permanent redirect to canonical maintenance. */
export default function MaintainanceTypoRedirectPage() {
  redirect("/wordpress/maintenance");
}
