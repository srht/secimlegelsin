/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as addAttribute } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { s as supabase$1, $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
import { createClient } from '@supabase/supabase-js';
import cookie from 'cookie';

const supabase = createClient(
  "https://ckxsatunmczlcaakzgef.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHNhdHVubWN6bGNhYWt6Z2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NzM4NjUsImV4cCI6MjAxODM0OTg2NX0.z1Rm61Jw0_RrNlJW4eIhtGxX73KdP3Ug9LSvJXKmQ0w"
);
async function getUser(req) {
  const c = cookie.parse(req.headers.get("cookie") ?? "");
  if (!c.sbat) {
    return null;
  }
  const { data: { user } } = await supabase.auth.getUser(c.sbat);
  if (!user || user.role !== "authenticated") {
    return null;
  }
  return user;
}

const talepturleri = [
  { name: "Eğitim", slug: "egitim" },
  { name: "Yollar-Caddeler", slug: "yollar" },
  { name: "Mahalleler", slug: "mahalleler" },
  { name: "Toplu Taşıma", slug: "tasima" }
];
const sehirler = [
  { name: "İstanbul", slug: "istanbul" },
  { name: "Ankara", slug: "ankara" },
  { name: "İzmir", slug: "izmir" },
  { name: "Bursa", slug: "bursa" },
  { name: "Adana", slug: "adana" },
  { name: "Antalya", slug: "antalya" },
  { name: "Konya", slug: "konya" },
  { name: "Gaziantep", slug: "gaziantep" },
  { name: "Mersin", slug: "mersin" },
  { name: "Diyarbakır", slug: "diyarbakir" }
];

function CategoryPic(tur) {
  let foundTur = talepturleri.find((t) => t.name === tur);
  return foundTur.slug;
}

const $$Astro$1 = createAstro();
const $$TaleplerSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TaleplerSection;
  const { sehir } = Astro2.params;
  const { data, error } = sehir ? await supabase$1.from("requests").select().eq("address", sehir.toLocaleUpperCase("tr")[0] + sehir.substring(1)).limit(10) : await supabase$1.from("requests").select().order("created_at", { ascending: false }).limit(10);
  console.log(data);
  return renderTemplate`${maybeRenderHead()}<div id="blog"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="grid gap-2"> ${data?.map((request) => renderTemplate`<div class="group p-4 columns flex h-36 sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"> <div class="mr-2 w-3/12"> <img${addAttribute(`/images/${CategoryPic(request.category)}.png`, "src")} alt="art cover" loading="lazy" class="rounded-xl w-32 transition duration-500 group-hover:scale-105"> </div> <div class="w-8/12 relative"> <a${addAttribute(`/talepdetay?id=${request.id}`, "href")}> <h3 class="text-2xl font-semibold text-gray-800 dark:text-white"> ${request.title} </h3> <p class="mt-1 mb-2 text-gray-600 dark:text-gray-300"> ${request.description} </p> </a> <a${addAttribute(`/talepdetay?id=${request.id}`, "href")}>Talep</a> </div> <div class="mr-5 w-1/12"> <a${addAttribute(`/talepdetay?id=${request.id}`, "href")}> <img src="/images/clapping.png" alt="art cover" loading="lazy" class="rounded-xl w-10 transition duration-500 hover:scale-105"> </a> </div> </div>`)} </div> ` })} </div>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/TaleplerSection.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { sehir: "ankara" } },
    { params: { sehir: "istanbul" } },
    { params: { sehir: "bursa" } },
    { params: { sehir: "izmir" } },
    { params: { sehir: "adana" } },
    { params: { sehir: "antalya" } },
    { params: { sehir: "konya" } },
    { params: { sehir: "gaziantep" } },
    { params: { sehir: "mersin" } },
    { params: { sehir: "enson" } },
    { params: { sehir: "diyarbakir" } },
    { params: { sehir: void 0 } }
  ];
}
const $$sehir = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$sehir;
  const user = await getUser(Astro2.request);
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": user, "title": "Talepler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-40"> ${renderComponent($$result2, "TaleplerSection", $$TaleplerSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/talepler/[sehir].astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/talepler/[sehir].astro";
const $$url = "/talepler/[sehir]";

const _sehir_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$sehir,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TaleplerSection as $, CategoryPic as C, _sehir_ as _, getUser as g, sehirler as s, talepturleri as t };
