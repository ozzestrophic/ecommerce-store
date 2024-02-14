// react imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

import PreviewSidebar from "./PreviewSidebar";
import PreviewData from "./PreviewData";

const GamePreview = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [desc, setDesc] = useState();
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadGameData = async () => {
      const gameSupa = await supabase
        .from("games")
        .select()
        .eq("id", id)
        .single();

      const descSupa = await supabase
        .from("descriptions")
        .select()
        .eq("gameID", id)
        .single();

      console.log("starting");

      if (gameSupa.error || descSupa.error) {
        console.log("not");
        setFetchError("couldn't fetch games");
        setGame(null);
        console.log(fetchError);
      }
      if (gameSupa.data && descSupa.data) {
        console.log("success");
        console.log(descSupa.data);
        console.log(gameSupa.data);
        setGame(gameSupa.data);
        setDesc(descSupa.data);
        setFetchError(null);
      }
    };

    loadGameData();
  }, [id]);

  if (game) {
    return (
      <div className=" max-w-6xl">
        <section>
          <h1 className=" text-left text-4xl mb-4">{game.title}</h1>
        </section>
        <section className="grid md:grid-cols-product gap-16">
          <PreviewData game={game} desc={desc} />
          <PreviewSidebar game={game} />
        </section>
      </div>
    );
  }
};
export default GamePreview;
