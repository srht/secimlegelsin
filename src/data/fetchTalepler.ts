import { supabase } from "../lib/supabase"

export async function FetchTalepler(recent, city) {
console.log(city)
    if (recent) {
        const { data, error } = await supabase.from("retrieveview").select().order("created_at", { ascending: false }).limit(50);
        return data
    }
    else {
        const { data, error } = city ? await supabase.from("retrieveview").select().order("count", { ascending: false }).eq('address', city.toLocaleUpperCase('tr')[0] + city.substring(1)).limit(50)
            : await supabase.from("retrieveview").select().order("count", { ascending: false }).limit(50)
        //const {data,error}=await supabase.from('retrieveview').select()
        return data;
    }
}