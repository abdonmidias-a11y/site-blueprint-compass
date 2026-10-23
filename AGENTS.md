<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Business data (units, WhatsApp numbers, services) lives only in src/lib/site-data.ts; components read from it so contact info stays consistent.
- All general contact buttons call useUnitSelector().open(service?) instead of linking to WhatsApp directly, so unit choice and message format stay centralized.

- Internal content pages share InternalPages.tsx and service details are keyed in site-data.ts to avoid duplicating layouts and business content.
- Official facts and FAQ data stay in site-data.ts; the shared Faq component serves Home and relevant services to keep answers consistent, and LeadForm permits presentation-only submit labels without changing submission logic.

- LeadForm shares client/server Zod validation; public submission uses an insert-only RPC with a unique submission receipt, honeypot and minimum interaction time; visitors have no direct lead-table privileges.
- Conversion events are emitted at the originating action; generate_lead only follows a confirmed receipt, never a WhatsApp click or thank-you page view. GTM loads only with a valid VITE_GTM_ID.
