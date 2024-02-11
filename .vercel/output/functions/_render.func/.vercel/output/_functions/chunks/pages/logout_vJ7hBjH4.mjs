/* empty css                                    */
import { c as createAstro, d as createComponent } from '../astro_G5HlcFTa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  return new Response(null, {
    status: 302,
    headers: new Headers({
      "Set-Cookie": "sbat=removed; Max-Age=-1; Path=/;",
      "Location": "/"
    })
  });
}, "/Users/serhat/Desktop/secimlegelsin/src/pages/logout.astro", void 0);

const $$file = "/Users/serhat/Desktop/secimlegelsin/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
