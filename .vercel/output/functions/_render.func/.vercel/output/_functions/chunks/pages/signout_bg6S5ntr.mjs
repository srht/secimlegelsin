import { s as supabase } from './_candidateSlug__ls2BAk_U.mjs';

const GET = async ({ cookies, redirect }) => {
  await supabase.auth.signOut();
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/");
};

export { GET };
