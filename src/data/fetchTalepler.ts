import { supabase } from "../lib/supabase"
import { getCategory } from "./tumdata";

export async function FetchTalepler(recent, city, category) {
console.log(city)
console.log(recent)

    if (recent) {
        const { data, error } = await supabase.from("retrieveview").select().order("created_at", { ascending: false }).limit(150);
        return data
    }
    else if(category){
        let nameCat=getCategory(category)
        const { data, error } = await supabase.from("retrieveview").select().order("count", { ascending: false }).eq('category', nameCat).limit(50)

    //const {data,error}=await supabase.from('retrieveview').select()
    return data;
    }
    else {
        const { data, error } = city ? await supabase.from("retrieveview").select().order("count", { ascending: false }).eq('address', city.toLocaleUpperCase('tr')[0] + city.substring(1)).limit(50)
            : await supabase.from("retrieveview").select().order("count", { ascending: false }).limit(150)
        //const {data,error}=await supabase.from('retrieveview').select()
        return data;
    }
}