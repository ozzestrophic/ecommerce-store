// react imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PreviewSidebar from "./PreviewSidebar";

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
      <section className="">
        <article>
          <h1 className="text-5xl">{game.title}</h1>
        </article>
        <article className="grid grid-cols-product gap-16 max-w-7xl">
          <div className="flex flex-col gap-16">
            <img
              src={game.imgUrl && game.imgUrl}
              alt=""
              className="rounded-md"
            />
            <p className="text-xl">
              EA SPORTS FC™ 24 welcomes you to The World’s Game: the most
              true-to-football experience ever with HyperMotionV, PlayStyles
              optimised by Opta, and an enhanced Frostbite™ Engine.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex gap-4">
                <div className=" w-[1px] opacity-60 bg-white"></div>
                <div>
                  <p className="opacity-75 font-light ">Publisher</p>
                  <p className=" underline">{game.publisher}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className=" w-[1px] opacity-60 bg-white"></div>
                <div>
                  <p className="opacity-75 font-light ">Genres</p>
                  <p className=" underline">Simulation</p>
                </div>
              </div>
            </div>
          </div>
          <PreviewSidebar title={game.title} />
        </article>
      </section>
    );
  }
};
export default GamePreview;
