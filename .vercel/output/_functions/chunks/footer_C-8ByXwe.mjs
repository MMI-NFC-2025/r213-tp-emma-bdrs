import { e as createComponent, m as maybeRenderHead, o as renderScript, r as renderTemplate } from './astro/server_09C4vKdF.mjs';
import 'piccolore';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-slate-900 text-white"> <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between"> <span class="text-lg font-semibold">Agence Immobiliere</span> <nav class="hidden md:flex items-center gap-6 text-sm"> <a href="/" class="hover:text-slate-200">Accueil</a> <a href="/offres" class="hover:text-slate-200">Offres</a> <a href="/contact" class="hover:text-slate-200">Contact</a> </nav> <button id="burger" class="p-2 rounded hover:bg-slate-800 md:hidden" aria-label="Ouvrir le menu" aria-expanded="false"> <span class="block w-6 h-0.5 bg-white mb-1"></span> <span class="block w-6 h-0.5 bg-white mb-1"></span> <span class="block w-6 h-0.5 bg-white"></span> </button> </div> <div id="mobile-nav" class="hidden border-t border-slate-800 md:hidden"> <nav class="flex flex-col px-4 py-3 gap-2 text-sm bg-slate-900 max-w-5xl mx-auto"> <a href="/" class="hover:text-slate-200">Accueil</a> <a href="/offres" class="hover:text-slate-200">Offres</a> <a href="/contact" class="hover:text-slate-200">Contact</a> </nav> </div> ${renderScript($$result, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/component/header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/component/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-slate-200 mt-12"> <div class="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm"> <span>Agence Immobilière</span> <span>01 23 45 67 89 · contact@agence-immo.fr</span> <span class="text-slate-400">© 2026</span> </div> </footer>`;
}, "C:/Users/emmax/OneDrive - ESME/Documents/GitHub/r213-tp-emma-bdrs/src/component/footer.astro", void 0);

export { $$Header as $, $$Footer as a };
