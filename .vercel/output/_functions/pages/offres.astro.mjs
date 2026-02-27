import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_wNGjSMv7.mjs';
import { $ as $$Card } from '../chunks/Card_DMLmFq5n.mjs';
import { u as updateOffreFavori, e as getOffres, f as filterByPrix } from '../chunks/backend_BV4naam3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let message = "";
  let offres = [];
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const actionType = String(data.get("actionType") || "");
    if (actionType === "toggleFavori") {
      const offerId = String(data.get("offerId") || "");
      const currentFavoris = String(data.get("currentFavoris") || "false") === "true";
      if (offerId) {
        const response = await updateOffreFavori(offerId, !currentFavoris);
        message = response.message;
      } else {
        message = "Impossible de mettre \xE0 jour le favori.";
      }
      offres = await getOffres();
    } else {
      const minPrix = Number.parseInt(String(data.get("minPrix")));
      const maxPrix = Number.parseInt(String(data.get("maxPrix")));
      if (Number.isFinite(minPrix) && Number.isFinite(maxPrix) && minPrix > 0 && maxPrix > 0 && maxPrix > minPrix) {
        offres = await filterByPrix(minPrix, maxPrix);
        if (offres.length === 0) {
          message = `Pas d'offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
        } else {
          message = `Liste des offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
        }
      } else {
        offres = await getOffres();
        message = "Veuillez entrer des valeurs valides pour le prix.";
      }
    }
  } else {
    offres = await getOffres();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres disponibles" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h1 class="text-3xl font-bold text-slate-900">Offres disponibles</h1> <p class="text-slate-600">Une petite selection prete a visiter.</p> <form action="/offres" method="POST" class="flex flex-wrap items-end gap-2"> <input type="hidden" name="actionType" value="filterPrix"> <div class="space-y-1"> <label for="minPrix" class="text-sm text-slate-700">Prix minimum</label> <input id="minPrix" type="number" name="minPrix" placeholder="Prix minimum" min="1" class="rounded-md border border-slate-300 p-2"> </div> <div class="space-y-1"> <label for="maxPrix" class="text-sm text-slate-700">Prix maximum</label> <input id="maxPrix" type="number" name="maxPrix" placeholder="Prix maximum" min="1" class="rounded-md border border-slate-300 p-2"> </div> <input type="submit" value="Filtrer par prix" class="cursor-pointer rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"> <a href="/offres/add" class="text-sm font-semibold text-blue-600 hover:text-blue-700">Ajouter une offre</a> </form> ${message && renderTemplate`<p class="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">${message}</p>`} <a href="/offres/surface/80" class="inline-flex items-center rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Voir les offres &gt; 80 m²
</a> ${offres.length === 0 ? renderTemplate`<p class="text-slate-500">Aucune offre disponible pour le moment.</p>` : renderTemplate`<div class="grid md:grid-cols-3 gap-4"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "record": offre })}`)} </div>`} </div> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
