/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as addAttribute } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
import { s as sehirler, g as getUser } from './_sehir__y-pHrDHj.mjs';

const $$Astro$1 = createAstro();
const $$SehirlerSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SehirlerSection;
  return renderTemplate`${maybeRenderHead()}<div id="sehirler"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="md:w-2/3 lg:w-1/2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary"> <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path> </svg> <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
Şehirlere Göre Talepler
</h2> <p class="text-gray-600 dark:text-gray-300">Şehirlere göre yazılmış talebi şehrin üzerine tıklayarak görün.</p> </div> <div class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"> ${sehirler.map((sehir) => renderTemplate`<div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"> <a${addAttribute(`/talepler/${sehir.slug}`, "href")} class="flex items-center justify-between group-hover:text-secondary"> <div class="relative space-y-8 py-12 p-8"> <div class="space-y-2"> <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"> ${sehir.name} </h5> </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"> <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path> </svg> </div> </a> </div>`)} </div> ` })} </div>../data/tumdata`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/SehirlerSection.astro", void 0);

const $$Astro = createAstro();
const $$Sehirler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sehirler;
  const user = await getUser(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": user, "title": "\u015Eehirler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40"> ${renderComponent($$result2, "SehirlerSection", $$SehirlerSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/sehirler.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/sehirler.astro";
const $$url = "/sehirler";

export { $$Sehirler as default, $$file as file, $$url as url };
