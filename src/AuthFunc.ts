import type { APIContext } from 'astro';
import { supabase } from './lib/supabase';

export async function getUserAuth(context: APIContext) {
  const { cookies, redirect } = context;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  console.log(accessToken)
  console.log(refreshToken)
  if (!accessToken || !refreshToken) {
    return context.redirect("/login");
  }

  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value,
  });
  return data;
}
