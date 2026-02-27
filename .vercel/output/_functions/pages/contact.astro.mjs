import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_09C4vKdF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_wNGjSMv7.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto space-y-6"> <div class="text-center space-y-2"> <h1 class="text-3xl font-bold text-slate-900">Contact</h1> <p class="text-slate-600">Dites-nous ce dont vous avez besoin, on vous répond sous 24h.</p> </div> <form class="bg-white border border-slate-200 rounded p-6 space-y-4"> <div> <label class="block text-sm font-medium text-slate-700 mb-1">Nom</label> <input class="w-full border border-slate-200 rounded px-3 py-2" type="text" placeholder="Votre nom" required> </div> <div> <label class="block text-sm font-medium text-slate-700 mb-1">Email</label> <input class="w-full border border-slate-200 rounded px-3 py-2" type="email" placeholder="vous@mail.com" required> </div> <div> <label class="block text-sm font-medium text-slate-700 mb-1">Sujet</label> <input class="w-full border border-slate-200 rounded px-3 py-2" type="text" placeholder="Visite, estimation, info..."> </div> <div> <label class="block text-sm font-medium text-slate-700 mb-1">Message</label> <textarea class="w-full border border-slate-200 rounded px-3 py-2" rows="4" placeholder="Expliquez votre projet"></textarea> </div> <button type="submit" class="bg-slate-800 text-white px-5 py-2 rounded hover:bg-slate-700">Envoyer</button> </form> <div class="text-sm text-slate-600 space-y-1"> <p><strong>Téléphone :</strong> 01 23 45 67 89</p> <p><strong>Email :</strong> contact@agence-immo.fr</p> <p><strong>Adresse :</strong> 12 rue des Pins, 75000 Paris</p> </div> </section> ` })}`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/contact.astro", void 0);

const $$file = "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
