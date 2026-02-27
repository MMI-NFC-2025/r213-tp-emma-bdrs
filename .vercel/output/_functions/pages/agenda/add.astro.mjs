import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_wNGjSMv7.mjs';
import { a as addEvent } from '../../chunks/backend_BV4naam3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let pbMessage = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    console.log(data);
    const eventDate = new Date(data.get("date")?.toString() || /* @__PURE__ */ new Date());
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    if (eventDate < now) {
      pbMessage = "La date doit \xEAtre dans le futur";
    } else {
      const resp = await addEvent(data);
      pbMessage = resp.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter un \xE9v\xE9nement" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl">Ajouter un événement</h1> <form class="flex flex-col p-4" action="/agenda/add" method="post" enctype="multipart/form-data"> <input type="text" name="title" placeholder="Titre" class="border my-4 p-2 rounded-md" required> <select name="categorie" class="border my-4 p-2" required> <option value="Théâtre">Théâtre</option> <option value="Musique">Musique</option> </select> <input type="text" name="excerpt" placeholder="Extrait" class="border my-4 p-2 rounded-md"> <select name="lieu" class="border my-4 p-2"> <option value="Théâtre">Théâtre</option> <option value="Conservatoire">Conservatoire</option> </select> <textarea name="description" placeholder="Description" class="border my-4 p-2 rounded-md"></textarea> <input type="date" name="date" class="border my-4 p-2 rounded-md" required> <input type="file" name="imgUrl" class="border my-4 p-2 rounded-md"> <input type="submit" value="Ajouter" class="bg-slate-500 rounded-lg p-5 text-white"> </form> <p>${pbMessage}</p> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/agenda/add.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/agenda/add.astro";
const $$url = "/agenda/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Add,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
