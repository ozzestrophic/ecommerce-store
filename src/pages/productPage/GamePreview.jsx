// react imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PreviewSidebar from "./PreviewSidebar";
import PreviewData from "./PreviewData";

const GamePreview = () => {
  const { id } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    const loadGameData = async () => {
      try {
        const gamesList = await fetch("http://localhost:4000/games");
        const filteredData = await gamesList.json();

        const [gameData] = filteredData.filter((game) => game.id === id);
        setGame(gameData);
      } catch (err) {
        console.log(err);
      }
    };
    loadGameData(id);
  }, [id]);

  if (game) {
    return (
      <div className=" max-w-6xl">
        <section>
          <h1 className=" text-left text-4xl mb-4">{game.title}</h1>
        </section>
        <section className="grid md:grid-cols-product gap-16">
          <PreviewData game={game} />
          <PreviewSidebar game={game} />
        </section>
      </div>
    );
  }
};
export default GamePreview;
