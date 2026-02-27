import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_wNGjSMv7.mjs';
import { g as getEvents } from '../chunks/backend_BV4naam3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let events = await getEvents();
  let categories = ["Tout", ...new Set(events.map((e) => e.categorie).filter(Boolean))];
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const selectedCategory = data.get("categorie");
    if (selectedCategory && selectedCategory !== "Tout") {
      events = events.filter((e) => e.categorie === selectedCategory);
      categories = [selectedCategory, ...categories.filter((c) => c !== selectedCategory)];
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Agenda" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-4"> <h1 class="text-3xl font-bold text-slate-900">Agenda</h1> <a href="/agenda/add" class="text-blue-800 underline">Ajouter un événement</a> <form action="/agenda" method="post" class="flex items-center gap-3"> <label for="categorie">Filtrer par catégorie :</label> <select id="categorie" name="categorie" class="border rounded p-2"> ${categories.map((categorie) => renderTemplate`<option${addAttribute(categorie, "value")}>${categorie}</option>`)} </select> <input type="submit" value="Filtrer" class="bg-slate-200 rounded px-3 py-2"> </form> ${events.length === 0 ? renderTemplate`<p>Aucun événement trouvé.</p>` : renderTemplate`<ul class="space-y-3"> ${events.map((event) => renderTemplate`<li class="rounded border border-slate-200 bg-white p-4"> <h2 class="text-xl font-semibold">${event.title}</h2> <p class="text-sm text-slate-600">${event.categorie} · ${event.lieu}</p> ${event.excerpt && renderTemplate`<p class="mt-2">${event.excerpt}</p>`} ${event.date && renderTemplate`<p class="text-sm text-slate-500 mt-1">Date : ${event.date}</p>`} </li>`)} </ul>`} </div> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/agenda/index.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/agenda/index.astro";
const $$url = "/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
