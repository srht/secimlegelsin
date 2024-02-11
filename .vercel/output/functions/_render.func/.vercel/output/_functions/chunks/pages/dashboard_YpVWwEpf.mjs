/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { s as supabase, a as $$Layout } from './_candidateSlug__ls2BAk_U.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "user": null, "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome ${email}</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> ` })}`;
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/dashboard.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
