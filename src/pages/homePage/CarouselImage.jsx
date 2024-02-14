import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarouselImage = ({ activeGame }) => {
  const [Game, setGame] = useState({});
  useEffect(() => {
    async function loadGame() {
      if (activeGame) {
        const currentGame = activeGame;
        setGame(currentGame);
      }
    }
    loadGame();
  }, [activeGame]);
  return (
    <div className=" relative ">
      {Game.imgUrl && (
        <Link to={`game/${Game.id}`}>
          <div className="bg-gradient-to-tr to-transparent to-50% from-slate-900 flex flex-col items-start justify-end p-8 absolute w-full h-full">
            <h2 className="font-bold text-3xl">{Game.title}</h2>
          </div>
          <img
            src={Game.imgUrl}
            alt=""
            className="rounded-2xl w-full h-full object-cover"
          />
        </Link>
      )}
    </div>
  );
};
export default CarouselImage;
