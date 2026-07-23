import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Saqrih+ Premium WordPress Support",
  description: "Priority WordPress support and proactive site care with Saqrih+ Premium Support.",
  path: "/wordpress/premium-support",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"Saqrih+ Premium WordPress Support","url":"/wordpress/premium-support"}]),
          serviceJsonLd({
            name: "Saqrih+ Premium WordPress Support",
            description: "Priority WordPress support and proactive site care with Saqrih+ Premium Support.",
            url: "/wordpress/premium-support",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What are some things I need to prepare for before starting?","answer":"Before kickoff, it helps to share your current website access, list of priorities, branding assets, and any technical constraints. A clear goals list and timeline lets the team begin work faster and reduce back-and-forth during setup."},{"question":"How long does it take to get a response when submitting new tickets?","answer":"Most requests receive an initial response within 24 hours, often sooner during business hours. Higher-priority items are triaged first, and urgent blockers are escalated immediately so critical issues are handled quickly."},{"question":"How long does the Saqrih+ onboarding process take?","answer":"Onboarding is usually completed in a few business days, depending on access and project complexity. Once credentials and priorities are confirmed, the team sets up workflows, communication channels, and your initial work queue."},{"question":"I’m migrating my site also, will I have any downtime on my website?","answer":"Most migrations are planned to avoid downtime or keep it minimal. The team typically stages the move, validates everything in advance, and schedules final cutover during low-traffic windows for a smooth transition."},{"question":"How do I know how many hours have been used?","answer":"You can track used hours through regular updates, work logs, and status summaries. Tasks are documented clearly so you can see what was completed, what is in progress, and how time was allocated across requests."},{"question":"How and when am I billed?","answer":"Billing is typically handled on a recurring cycle based on your selected plan, with any approved overages documented separately. You’ll receive clear invoices and breakdowns so costs remain predictable and easy to review."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
