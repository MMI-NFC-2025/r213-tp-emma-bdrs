import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_wNGjSMv7.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Agence Immobili\xE8re" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center space-y-4"> <h1 class="text-4xl font-bold text-slate-900">Trouver un logement simplement</h1> <p class="text-lg text-slate-600">Une petite agence de quartier qui vous accompagne dans vos visites.</p> <a href="/offres" class="inline-block bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700">Voir les offres disponibles</a> </section> <section class="mt-12 grid md:grid-cols-3 gap-4"> <div class="bg-white border border-slate-200 rounded p-5 space-y-2"> <h3 class="text-lg font-semibold text-slate-900">Appartements</h3> <p class="text-slate-600">Petites surfaces et T2 proches des transports.</p> </div> <div class="bg-white border border-slate-200 rounded p-5 space-y-2"> <h3 class="text-lg font-semibold text-slate-900">Maisons</h3> <p class="text-slate-600">Jardin, garage et vie de famille au calme.</p> </div> <div class="bg-white border border-slate-200 rounded p-5 space-y-2"> <h3 class="text-lg font-semibold text-slate-900">Investissement</h3> <p class="text-slate-600">Biens simples à louer, rentabilité claire.</p> </div> </section> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/index.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
