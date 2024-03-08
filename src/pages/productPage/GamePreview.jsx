import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

// components
import PreviewSidebar from "./PreviewSidebar";
import PreviewData from "./PreviewData";

const GamePreview = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadGameData = async () => {
      const { data, error } = await supabase
        .from("games")
        .select("*, descriptions(description), categories(*)")
        .eq("id", id)
        .single();

      if (error) {
        setFetchError("couldn't fetch games");
        setGame(null);
        console.log(fetchError);
      }
      if (data) {
        setGame(data);
        setFetchError(null);
        console.log(data);
      }
    };

    loadGameData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (game) {
    return (
      <div className=" max-w-6xl">
        <section>
          <h1 className=" text-left text-4xl mb-4">{game.title}</h1>
        </section>
        <section className="grid md:grid-cols-product gap-16">
          <PreviewData
            game={game}
            desc={game.descriptions}
            categories={game.categories}
          />
          <PreviewSidebar game={game} />
        </section>
      </div>
    );
  }
};
export default GamePreview;
