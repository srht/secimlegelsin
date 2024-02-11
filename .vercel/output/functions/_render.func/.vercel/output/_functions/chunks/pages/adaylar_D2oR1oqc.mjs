/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
import { g as getUser } from './_sehir__y-pHrDHj.mjs';

const $$Astro$1 = createAstro();
const $$AdaylarSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdaylarSection;
  const adaylar = [
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" },
    { name: "Serhat K\xF6ro\u011Flu", photo: "Bilmem ne" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="text-gray-600 dark:text-gray-300" id="testimonials"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mb-20 space-y-4 px-6 md:px-0"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary"> <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path> </svg> <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
Adaylar
</h2> </div> <div class="md:columns-2 lg:columns-3 gap-8 space-y-8"> ${adaylar.map((aday) => renderTemplate`<div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"> <div class="flex gap-4"> <img class="w-12 h-12 rounded-full" src="./images/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy"> <div> <h6 class="text-lg font-medium text-gray-700 dark:text-white">${aday.name}</h6> <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p> </div> </div> <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p> </div>`)} </div> ` })} </div>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/AdaylarSection.astro", void 0);

const $$Astro = createAstro();
const $$Adaylar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Adaylar;
  const user = await getUser(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": user, "title": "Adaylar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-40"> ${renderComponent($$result2, "AdaylarSection", $$AdaylarSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/adaylar.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/adaylar.astro";
const $$url = "/adaylar";

export { $$Adaylar as default, $$file as file, $$url as url };
