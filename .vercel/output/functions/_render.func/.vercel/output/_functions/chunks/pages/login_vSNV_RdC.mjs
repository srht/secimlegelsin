/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Container, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';

const $$Astro$1 = createAstro();
const $$Login$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login$1;
  const body = await Astro2.request.json();
  Astro2.response.headers.set("Set-Cookie", `sbat=${body.access_token}; Path=/;`);
  return renderTemplate``;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/api/login.astro", void 0);

const $$file$1 = "/Users/serhat/Desktop/secimlegelsin/src/pages/api/login.astro";
const $$url$1 = "/api/login";

const login$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": null, "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40"> <div id="sehirler"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <h1>Seçimle Gelsin'e Kullanıcı Giriş Yapın</h1> <h3>Seçimle Gelsin'e taleplerinizi eklemek için kullanıcı giriş yapabilirsiniz!</h3> <form action="/api/auth/signin" method="post"> <button value="google" name="provider" type="submit"> <img src="/images/gicon.svg">
Google ile Giriş</button> </form> ` })} </div> </main> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/login.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/login.astro";
const $$url = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { login as a, login$1 as l };
