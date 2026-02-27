import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { d as getOffre } from '../../chunks/backend_BV4naam3.mjs';
import { $ as $$Base } from '../../chunks/Base_je6wjpr1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "titre": offre ? offre.nomMaison : "Offre" }, { "default": async ($$result2) => renderTemplate`${offre ? renderTemplate`${maybeRenderHead()}<div class="space-y-4"> <h2 class="text-2xl font-semibold text-slate-900">${offre.nomMaison}</h2> ${offre.description && renderTemplate`<p class="text-slate-700 leading-relaxed">${offre.description}</p>`} <ul class="list-disc pl-5 text-slate-700 space-y-1"> <li>${offre.adresse}</li> <li>${offre.surface} m²</li> <li>€${offre.prix}</li> </ul> <a href="/offres" class="text-sm font-semibold text-blue-600 hover:text-blue-700">
Retour aux offres
</a> </div>` : renderTemplate`<p class="text-slate-600">Offre introuvable.</p>`}` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
