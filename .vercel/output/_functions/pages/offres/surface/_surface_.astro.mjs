import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { c as bySurface } from '../../../chunks/backend_BV4naam3.mjs';
import { $ as $$Base } from '../../../chunks/Base_je6wjpr1.mjs';
import { $ as $$Card } from '../../../chunks/Card_DMLmFq5n.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const { surface } = Astro2.params;
  const surfaceValue = Number(surface);
  const isNaNValue = Number.isNaN(surfaceValue);
  const offres = isNaNValue ? [] : await bySurface(surfaceValue);
  const title = isNaNValue ? "Surface invalide" : `Offres > ${surfaceValue} m\xB2`;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "titre": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h2 class="text-2xl font-semibold text-slate-900">${title}</h2> ${isNaNValue && renderTemplate`<p class="text-slate-600">Surface non valide.</p>`} ${!isNaNValue && offres.length === 0 && renderTemplate`<p class="text-slate-600">Aucune offre ne correspond a cette surface.</p>`} ${offres.length > 0 && renderTemplate`<div class="grid md:grid-cols-3 gap-4"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "record": offre })}`)} </div>`} <a href="/offres" class="text-sm font-semibold text-blue-600 hover:text-blue-700">
Retour aux offres
</a> </div> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$surface,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
