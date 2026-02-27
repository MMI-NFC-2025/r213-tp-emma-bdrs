import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_wNGjSMv7.mjs';
import { b as addOffre } from '../../chunks/backend_BV4naam3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter une offre" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-xl space-y-4"> <h1 class="text-2xl font-bold text-slate-900">Ajouter une offre</h1> <form action="/offres/add" method="POST" enctype="multipart/form-data" class="space-y-3"> <input type="text" name="nomMaison" placeholder="Nom de la maison" required class="w-full rounded-md border border-slate-300 p-2"> <input type="number" name="prix" placeholder="Prix" required min="1" class="w-full rounded-md border border-slate-300 p-2"> <input type="number" name="nbSdb" placeholder="Nombre de salles de bain" min="0" class="w-full rounded-md border border-slate-300 p-2"> <input type="number" name="nbChambres" placeholder="Nombre de chambres" min="0" class="w-full rounded-md border border-slate-300 p-2"> <input type="number" name="surface" placeholder="Superficie" min="1" class="w-full rounded-md border border-slate-300 p-2"> <input type="file" name="image" class="w-full rounded-md border border-slate-300 p-2"> <button type="submit" class="inline-flex items-center rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Ajouter
</button> </form> ${message && renderTemplate`<p class="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">${message}</p>`} </div> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Add,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
