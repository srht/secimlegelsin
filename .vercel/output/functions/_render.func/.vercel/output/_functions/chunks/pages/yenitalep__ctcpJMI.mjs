/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';
import { t as talepturleri } from './_sehir__y-pHrDHj.mjs';
import { createClient } from '@supabase/supabase-js';

const $$Astro$2 = createAstro();
const $$SehirlerDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SehirlerDropdown;
  return renderTemplate`${maybeRenderHead()}<select class="bg-white h-10 w-full px-5 rounded-lg border focus:outline-none" name="sehir"> <option>------</option> <option>Adana</option> <option>Adıyaman</option> <option>Afyonkarahisar</option> <option>Ağrı</option> <option>Amasya</option> <option>Ankara</option> <option>Antalya</option> <option>Artvin</option> <option>Aydın</option> <option>Balıkesir</option> <option>Bilecik</option> <option>Bingöl</option> <option>Bitlis</option> <option>Bolu</option> <option>Burdur</option> <option>Bursa</option> <option>Çanakkale</option> <option>Çankırı</option> <option>Çorum</option> <option>Denizli</option> <option>Diyarbakır</option> <option>Edirne</option> <option>Elazığ</option> <option>Erzincan</option> <option>Erzurum</option> <option>Eskişehir</option> <option>Gaziantep</option> <option>Giresun</option> <option>Gümüşhane</option> <option>Hakkâri</option> <option>Hatay</option> <option>Isparta</option> <option>Mersin</option> <option>İstanbul</option> <option>İzmir</option> <option>Kars</option> <option>Kastamonu</option> <option>Kayseri</option> <option>Kırklareli</option> <option>Kırşehir</option> <option>Kocaeli</option> <option>Konya</option> <option>Kütahya</option> <option>Malatya</option> <option>Manisa</option> <option>Kahramanmaraş</option> <option>Mardin</option> <option>Muğla</option> <option>Muş</option> <option>Nevşehir</option> <option>Niğde</option> <option>Ordu</option> <option>Rize</option> <option>Sakarya</option> <option>Samsun</option> <option>Siirt</option> <option>Sinop</option> <option>Sivas</option> <option>Tekirdağ</option> <option>Tokat</option> <option>Trabzon</option> <option>Tunceli</option> <option>Şanlıurfa</option> <option>Uşak</option> <option>Van</option> <option>Yozgat</option> <option>Zonguldak</option> <option>Aksaray</option> <option>Bayburt</option> <option>Karaman</option> <option>Kırıkkale</option> <option>Batman</option> <option>Şırnak</option> <option>Bartın</option> <option>Ardahan</option> <option>Iğdır</option> <option>Yalova</option> <option>Karabük</option> <option>Kilis</option> <option>Osmaniye</option> <option>Düzce</option> </select>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/SehirlerDropdown.astro", void 0);

const $$Astro$1 = createAstro();
const $$YeniTalepSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YeniTalepSection;
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHNhdHVubWN6bGNhYWt6Z2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NzM4NjUsImV4cCI6MjAxODM0OTg2NX0.z1Rm61Jw0_RrNlJW4eIhtGxX73KdP3Ug9LSvJXKmQ0w";
  const supabase = createClient("https://ckxsatunmczlcaakzgef.supabase.co", supabaseKey);
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const baslik = data.get("baslik");
      const akelimeler = data.get("kelimeler");
      const keywordsArray = akelimeler.toString().split(",");
      const sehir = data.get("sehir");
      const ilce = data.get("ilce");
      const kategoriler = data.get("kategoriler");
      const talep = data.get("talep");
      await supabase.from("requests").insert({
        "title": baslik,
        "description": talep,
        "keywords": keywordsArray,
        "category": kategoriler,
        "address": sehir,
        "county": ilce
      }).then((res) => console.log(res));
    } catch (ex) {
    }
  }
  return renderTemplate`${maybeRenderHead()}<div id="sehirler"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="md:w-2/3 lg:w-1/2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary"> <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path> </svg> <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
Yeni Talep
</h2> <p class="text-gray-600 dark:text-gray-300">Talebinizi oluşturun</p> </div> <div class="grid gap-8"> <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"> <div class="relative overflow-hidden rounded-xl"> <img src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"> </div> <div class="mt-6 relative"> <form method="post"> <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
Talep detayını yazın
</h3> <div class="mt-2"> <label class="block text-sm text-gray-600">Başlık:</label> <input type="text" name="baslik" placeholder="" class="bg-white h-10 w-full px-5 rounded-lg border focus:outline-none"> </div> <div class="mt-2"> <label class="block text-sm text-gray-600">Anahtar Kelimeler:</label> <input type="text" name="kelimeler" placeholder="anahtar kelimeler" class="bg-white h-10 w-full px-5 rounded-lg border focus:outline-none"> </div> <div class="mt-2"> <label class="block text-sm text-gray-600">Şehir Seçin:</label> ${renderComponent($$result2, "SehirlerDropdown", $$SehirlerDropdown, {})} </div> <div class="mt-2"> <label class="block text-sm text-gray-600">İlçe:</label> <input type="text" name="ilce" placeholder="Varsa İlçe" class="bg-white h-10 w-full px-5 rounded-lg border focus:outline-none"> </div> <div class="mt-2"> <label class="block text-sm text-gray-600">Kategori:</label> <select name="kategoriler" class="bg-white h-10 w-full px-5 rounded-lg border focus:outline-none"> <option>Lütfen Seçin</option> ${talepturleri.map((tur) => renderTemplate`<option>${tur.name}</option>`)} </select> </div> <div class="mt-2"> <label class="block text-sm text-gray-600">Talep Detayı:</label> <textarea name="talep" class="bg-white h-40 w-full px-5 py-4 rounded-lg border focus:outline-none" placeholder="Talep detayınızı girin"></textarea> </div> <div class="mt-2"> <button type="submit" class="focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-primary dark:focus:ring-purple-900">
Talep Oluştur
</button> </div> </form> </div> </div> </div> ` })} </div>`;
}, "/Users/serhat/Desktop/secimlegelsin/src/components/YeniTalepSection.astro", void 0);

const $$Astro = createAstro();
const $$Yenitalep = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Yenitalep;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": null, "title": "\u015Eehirler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40"> ${renderComponent($$result2, "YeniTalepSection", $$YeniTalepSection, {})} </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/yenitalep.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/yenitalep.astro";
const $$url = "/yenitalep";

export { $$Yenitalep as default, $$file as file, $$url as url };
