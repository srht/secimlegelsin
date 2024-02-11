/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import { s as supabase, $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
import { C as CategoryPic } from './_sehir__y-pHrDHj.mjs';
import { jsx } from 'react/jsx-runtime';
import '@supabase/ssr';

function Alkis(param) {
  const alkisClick = async () => {
    console.log(param);
    console.log(param.user);
    supabase.from("votes").insert({
      selection: "afasd",
      userid: param.user.id,
      requestid: param.requestid
    }).then((res) => console.log(res));
    alert("Gönderildi!");
  };
  return /* @__PURE__ */ jsx("button", { onClick: alkisClick, id: "alkis", children: /* @__PURE__ */ jsx("img", { class: "w-10", src: "/images/clapping.png" }) });
}

const $$Astro = createAstro();
const $$Talepdetay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Talepdetay;
  const id = Astro2.url.searchParams.get("id") || "";
  const sessionData = await supabase.auth.getSession();
  const { data, error } = await supabase.from("requests").select().eq("id", id).limit(1);
  const requestDetail = data[0];
  console.log(sessionData?.data?.session?.user?.id);
  const userData = sessionData?.data?.session?.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": userData, "title": "\u015Eehirler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40"> <div id="sehirler"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div> <div class="md:w-2/3 lg:w-1/2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary"> <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path> </svg> <div class="flex justify-between"> <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl"> ${requestDetail.title} </h2> </div> <div>${userData ? renderTemplate`${renderComponent($$result3, "Alkis", Alkis, { "user": userData, "requestid": requestDetail.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/serhat/Desktop/secimlegelsin/src/components/Alkis.jsx", "client:component-export": "default" })}` : renderTemplate`<span></span>`}</div> </div> <div class="grid gap-8"> <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"> <div class="relative overflow-hidden rounded-xl"> <img${addAttribute(`images/${CategoryPic(requestDetail.category)}.png`, "src")} alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"> </div> <div class="mt-6 relative"> ${requestDetail.description} </div> <div>${userData ? renderTemplate`${renderComponent($$result3, "Alkis", Alkis, { "user": userData, "requestid": requestDetail.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/serhat/Desktop/secimlegelsin/src/components/Alkis.jsx", "client:component-export": "default" })}` : renderTemplate`<span></span>`}</div> </div> </div> </div> ` })} </div> </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/talepdetay.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/talepdetay.astro";
const $$url = "/talepdetay";

export { $$Talepdetay as default, $$file as file, $$url as url };
