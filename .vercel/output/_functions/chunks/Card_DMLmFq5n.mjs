import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_09C4vKdF.mjs';
import 'piccolore';
import 'clsx';
import PocketBase from 'pocketbase';

const db = new PocketBase('http://127.0.0.1:8090');

async function getImageUrl(record, imageField) {  
    return db.files.getUrl(record, imageField);  
}

const $$Astro = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { record } = Astro2.props;
  const title = record?.nomMaison ?? record?.titre ?? "Offre";
  const description = record?.description ?? "";
  const price = record?.prix ?? null;
  const surface = record?.surface ?? null;
  const city = record?.ville ?? "";
  const imageUrl = record?.image ? await getImageUrl(record, record.image) : null;
  const offerId = record?.id ?? null;
  const isFavorite = Boolean(record?.favoris);
  return renderTemplate`${maybeRenderHead()}<article class="bg-white border border-slate-200 rounded overflow-hidden shadow-sm"> ${imageUrl ? renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover" loading="lazy">` : renderTemplate`<div class="w-full h-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
Pas d'image
</div>`} <div class="p-4 space-y-2"> <div class="flex items-start justify-between gap-2"> <h3 class="text-lg font-semibold text-slate-900">${title}</h3> ${offerId && renderTemplate`<form action="/offres" method="POST"> <input type="hidden" name="actionType" value="toggleFavori"> <input type="hidden" name="offerId"${addAttribute(offerId, "value")}> <input type="hidden" name="currentFavoris"${addAttribute(String(isFavorite), "value")}> <button type="submit" class="text-xl leading-none text-amber-400 hover:text-amber-500"${addAttribute(isFavorite ? "Retirer des favoris" : "Ajouter aux favoris", "aria-label")}${addAttribute(isFavorite ? "Retirer des favoris" : "Ajouter aux favoris", "title")}> ${isFavorite ? "\u2605" : "\u2606"} </button> </form>`} </div> ${description && renderTemplate`<p class="text-sm text-slate-600">${description}</p>`} <div class="flex flex-wrap gap-2 text-sm text-slate-600"> ${price !== null && price !== void 0 && renderTemplate`<span class="bg-slate-100 px-2 py-1 rounded">€${price}</span>`} ${surface !== null && surface !== void 0 && renderTemplate`<span class="bg-slate-100 px-2 py-1 rounded">${surface} m²</span>`} ${city && renderTemplate`<span class="bg-slate-100 px-2 py-1 rounded">${city}</span>`} </div> ${offerId && renderTemplate`<a${addAttribute(`/offres/${offerId}`, "href")} class="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
Voir plus
</a>`} </div> </article>`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/component/Card.astro", void 0);

export { $$Card as $ };
