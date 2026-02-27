import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B8yqSC2-.mjs';
import { manifest } from './manifest_Bf33a8zX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agenda/add.astro.mjs');
const _page2 = () => import('./pages/agenda.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/offres/add.astro.mjs');
const _page5 = () => import('./pages/offres/surface/_surface_.astro.mjs');
const _page6 = () => import('./pages/offres/_id_.astro.mjs');
const _page7 = () => import('./pages/offres.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agenda/add.astro", _page1],
    ["src/pages/agenda/index.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/offres/add.astro", _page4],
    ["src/pages/offres/surface/[surface].astro", _page5],
    ["src/pages/offres/[id].astro", _page6],
    ["src/pages/offres/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4ce93c87-5581-4df5-bac8-459730e7ebfe",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
