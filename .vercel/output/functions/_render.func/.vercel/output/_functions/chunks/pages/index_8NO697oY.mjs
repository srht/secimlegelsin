/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as addAttribute, h as renderHead, e as renderSlot } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Container, b as $$AppHeader, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
/* empty css                          */
import { $ as $$TaleplerSection, g as getUser } from './_sehir__y-pHrDHj.mjs';

const $$Astro$4 = createAstro();
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${maybeRenderHead()}<div class="relative" id="home"> <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"> <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div> <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative pt-36 ml-auto"> <div class="lg:w-2/3 text-center mx-auto"> <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
Seçimle <span class="text-primary dark:text-white">geliyor.</span> </h1> <p class="mt-8 text-gray-700 dark:text-gray-300">
Seçimlerde talebiniz olan konuları, şikayetlerinizi gündeme getirin!
          Sunulmuş talepler için destek verin!
</p> <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"> <a href="/yenitalep" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"> <span class="relative text-base font-semibold text-white">Talebinizi Yazın</span> </a> <a href="#talepler" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"> <span class="relative text-base font-semibold text-primary dark:text-white">Talepler</span> </a> </div> </div> </div> ` })} </div>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/HeroSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$HomeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  return renderTemplate`<html lang="en" data-astro-cid-2m2di2aw> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Template built with tailwindcss using Tailus blocks v2"><title>${Astro2.props.title} / Seçimle Gelsin</title><link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white dark:bg-gray-900" data-astro-cid-2m2di2aw> ${renderComponent($$result, "AppHeader", $$AppHeader, { "user": null, "data-astro-cid-2m2di2aw": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/layouts/HomeLayout.astro", void 0);

const $$Astro$2 = createAstro();
const $$AdayRowSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AdayRowSection;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overflow-x-auto pt-24"> <div class="inline-flex"> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1558009149530800128/nIihF5ji_400x400.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Ekrem İmamoğlu</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1743979524956585984/wKA8aoGw_400x400.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Murat Kurum</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1722008538644353024/659H7Pzn_400x400.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Mansur Yavaş</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://cdnuploads.aa.com.tr/uploads/Contents/2013/11/04/thumbs_b_c_1ee4aa6d65008e3e19193a791550a312.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Turgut Altınok</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1363482698547879937/lwb568Di_400x400.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Cemil Tugay</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1749105180103131136/13QgWPiR_400x400.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Hamza Dağ</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://image.milimaj.com/i/milliyet/75/0x0/659a7aaf8e3a7e39eb0098ca.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Alinur Aktaş</h1> </div> <div class="flex-1 text-center px-5 py-2 m-2"> <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"> <img class="object-cover w-full h-full" src="https://www.sehirodulleri.com/wp-content/uploads/2020/03/mustafa-bozbey-680x680.jpg"> </div> <h1 class="pt-16 text-base font-semibold text-gray-900">Mustafa Bozbey</h1> </div> </div> </div> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/AdayRowSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "Se\xE7imle Gelsin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "AdayRowSection", $$AdayRowSection, {})} ${renderComponent($$result2, "TaleplerSection", $$TaleplerSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/index.astro", void 0);

const $$file$1 = "/Users/serhat/Desktop/secimlegelsin/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = await getUser(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": user, "title": "Talepler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-40"> ${renderComponent($$result2, "TaleplerSection", $$TaleplerSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/talepler/index.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/talepler/index.astro";
const $$url = "/talepler";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
