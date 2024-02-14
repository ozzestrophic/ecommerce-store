import { Link } from "react-router-dom";
import CarouselTab from "./CarouselTab";
import { useEffect, useState } from "react";
import CarouselImage from "./CarouselImage";

const Carousel = ({ gamesList }) => {
  const [activeGame, setActiveGame] = useState();

  useEffect(() => {
    setActiveGame(gamesList[0]);
  }, [gamesList]);

  return (
    <article className=" max-w-6xl grid grid-cols-1 md:grid-cols-carousel gap-8 font-light">
      <CarouselImage activeGame={activeGame} />
      <div className="flex md:flex-col md:overflow-hidden overflow-y-hidden overflow-x-scroll gap-1">
        {gamesList.map((game) => {
          return (
            <div
              className=" min-w-fit"
              key={game.id}
              onMouseEnter={() => {
                setActiveGame(game);
              }}
            >
              <Link to={`game/${game.id}`}>
                {game.id === "1" ? (
                  <CarouselTab
                    // active={true}
                    image={game.imgUrl}
                    name={game.title}
                  />
                ) : (
                  <CarouselTab
                    key={game.id}
                    image={game.imgUrl}
                    name={game.title}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default Carousel;
