import { createBrowserClient } from '@supabase/ssr'
import { supabase } from "../lib/supabase";
export default function Alkis(param){
    
    const alkisClick=async ()=>{
console.log(param)
    
console.log(param.user)
supabase.from('votes').insert({
    selection:'afasd',
    userid:param.user.id,
    requestid:param.requestid
}).then((res)=>console.log(res))
        alert("Gönderildi!")
    }
  
    return (<button onClick={alkisClick} id="alkis">
    <img class="w-10" src='/images/clapping.png' />
    </button>)
}



