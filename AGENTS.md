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
