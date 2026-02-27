import { e as createComponent, f as createAstro, l as renderHead, k as renderComponent, n as renderSlot, r as renderTemplate } from './astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Header, a as $$Footer } from './footer_C-8ByXwe.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>${titre}</title>${renderHead()}</head> <body class="bg-gray-50 min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1 w-full max-w-5xl mx-auto px-4 py-10"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/layouts/Base.astro", void 0);

export { $$Base as $ };
