import { useEffect, useState } from "react";
import image1 from "../../assets/images/image-1.avif";

const CarouselImage = ({ activeGame }) => {
  const [Game, setGame] = useState({});
  useEffect(() => {
    async function loadGame() {
      if (activeGame) {
        const currentGame = activeGame;
        setGame(currentGame);
      }
      console.log("effect");
    }
    loadGame();
  }, [activeGame]);
  return (
    <div>
      <img
        src={Game.imgUrl || image1}
        alt=""
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
  );
};
export default CarouselImage;
