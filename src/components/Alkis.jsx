import { createBrowserClient } from "@supabase/ssr";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
export default function Alkis(param) {
  const [totalVotes, setTotalVote] = useState(0);
  useEffect(() => {}, []);

  async function getVoteCount() {
    const { data, count } = await supabase
      .from("votes")
      .select("id", { count: "exact" })
      .eq("requestid", param.requestid);
    console.log("data", data);
    setTotalVote(count);
    document.getElementById("vr-" + param.requestid).innerHTML = count;
  }

  const alkisClick = async () => {
    getVoteCount();
    console.log(param);
    console.log(param.user);
    supabase
      .from("votes")
      .insert({
        selection: "afasd",
        userid: param.user.id,
        requestid: param.requestid,
      })
      .then((res) => {
        setTotalVote(totalVotes + 1);
        document.getElementById("vr-" + param.requestid).innerHTML =
          totalVotes + 1;
      });
  };

  const alkisButton = param.user ? (
    <div>
      <button onClick={alkisClick} id="alkis">
        <img class="w-10" src="/images/clapping.png" />
      </button>
      <br />
    </div>
  ) : (
    <a class="transition duration-500 group-hover:scale-105" href="/login">
      <img class="w-10" src="/images/clapping.png" />
    </a>
  );

  return <div>{alkisButton}</div>;
}
