/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent, g as addAttribute, h as renderHead } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import 'clsx';
import { createClient } from '@supabase/supabase-js';
/* empty css                          */
/* empty css                                    */

const $$Astro$3 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/Container.astro", void 0);

const supabase = createClient(
  "https://ckxsatunmczlcaakzgef.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHNhdHVubWN6bGNhYWt6Z2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NzM4NjUsImV4cCI6MjAxODM0OTg2NX0.z1Rm61Jw0_RrNlJW4eIhtGxX73KdP3Ug9LSvJXKmQ0w",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

const $$Astro$2 = createAstro();
const $$AppHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AppHeader;
  const { data, error } = await supabase.auth.getSession();
  const email = data?.session?.user?.email;
  const user = data?.session?.user;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-qgrrgaau> <nav class="z-10 w-full absolute" data-astro-cid-qgrrgaau> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-qgrrgaau": true }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative" data-astro-cid-qgrrgaau> <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" class="hidden peer" data-astro-cid-qgrrgaau> <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0" data-astro-cid-qgrrgaau> <a href="/" aria-label="logo" class="flex space-x-2 items-center" data-astro-cid-qgrrgaau> <div aria-hidden="true" class="flex space-x-1" data-astro-cid-qgrrgaau> <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white" data-astro-cid-qgrrgaau></div> <div class="h-6 w-2 bg-primary" data-astro-cid-qgrrgaau></div> </div> <span class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-qgrrgaau><strong data-astro-cid-qgrrgaau>secimle</strong>gelsin</span> </a> <div class="relative flex items-center lg:hidden max-h-10" data-astro-cid-qgrrgaau> <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" class="relative p-6 -mr-6" data-astro-cid-qgrrgaau> <div aria-hidden="true" id="line" class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300" data-astro-cid-qgrrgaau></div> <div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300" data-astro-cid-qgrrgaau></div> </label> </div> </div> <div aria-hidden="true" class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70" data-astro-cid-qgrrgaau></div> <div class="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700" data-astro-cid-qgrrgaau> <div class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0" data-astro-cid-qgrrgaau> <ul class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0" data-astro-cid-qgrrgaau> <li data-astro-cid-qgrrgaau> <a href="/talepler" class="block md:px-4 transition hover:text-primary" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>Ülke Geneli</span> </a> </li> <li data-astro-cid-qgrrgaau> <a href="/sehirler" class="block md:px-4 transition hover:text-primary" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>Şehirler</span> </a> </li> <li data-astro-cid-qgrrgaau> <a href="/talepler/enson" class="block md:px-4 transition hover:text-primary" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>En Son Yayınlananlar</span> </a> </li> <li data-astro-cid-qgrrgaau> <a href="/adaylar" class="block md:px-4 transition hover:text-primary" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>Adaylar</span> </a> </li> <li data-astro-cid-qgrrgaau> ${user ? renderTemplate`<div data-astro-cid-qgrrgaau><span data-astro-cid-qgrrgaau>Merhaba ${email},</span><form action="/api/auth/signout" data-astro-cid-qgrrgaau><button type="submit" data-astro-cid-qgrrgaau>Çıkış</button></form></div>` : renderTemplate`<a href="/login" class="block md:px-4 transition hover:text-primary" data-astro-cid-qgrrgaau>Giriş Yap</a>`} </li> </ul> </div> <div class="mt-12 lg:mt-0" data-astro-cid-qgrrgaau> <a href="/yenitalep" class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" data-astro-cid-qgrrgaau> <span class="relative text-sm font-semibold text-white" data-astro-cid-qgrrgaau>Talebini Yaz</span> </a> </div> </div> </div> ` })} </nav> </header> `;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/AppHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Template built with tailwindcss using Tailus blocks v2"><title>${Astro2.props.title} / Seçimle Gelsin</title><link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white dark:bg-gray-900" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AppHeader", $$AppHeader, { "data-astro-cid-sckkx6r4": true })} <div class="h-10" data-astro-cid-sckkx6r4>&nbsp;</div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$candidateSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$candidateSlug;
  const slug = Astro2.params.candidateSlug;
  console.log(slug);
  const { data, error } = await supabase.from("candidates").select().eq("slug", slug).limit(1);
  const candidate = data[0];
  console.log(data);
  const title = "Adaylar - " + candidate?.name;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": null, "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-10 pt-20"> <div class="text-gray-600 dark:text-gray-300" id="testimonials"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="mb-20 space-y-4 px-6 md:px-0"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary"> <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path> </svg> <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl"> ${candidate?.name} </h2> </div> <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"> <div class="flex gap-4"> <img class="w-12 h-12 rounded-full"${addAttribute(candidate?.picurl, "src")} alt="user avatar" width="400" height="400" loading="lazy"> <div> <h6 class="text-lg font-medium text-gray-700 dark:text-white">${candidate?.name}</h6> <p class="text-sm text-gray-500 dark:text-gray-300">${candidate?.title}</p> </div> </div> <p class="mt-8">${candidate?.bio}</p> </div> ` })} </div> </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/[candidateSlug].astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/[candidateSlug].astro";
const $$url = "/[candidateSlug]";

const _candidateSlug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$candidateSlug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, _candidateSlug_ as _, $$Layout as a, $$AppHeader as b, supabase as s };
