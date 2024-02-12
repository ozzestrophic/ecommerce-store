import { Link } from "react-router-dom";
import image1 from "../../assets/images/image-1.avif";
import CarouselTab from "./CarouselTab";
import { useState } from "react";

const Carousel = ({ gamesList }) => {
  const [activeImage, setActiveImage] = useState();
  return (
    <article className=" max-w-6xl grid grid-cols-carousel gap-8 font-light">
      <img
        src={activeImage}
        alt=""
        className="rounded-2xl w-full h-full object-cover"
      />
      <div className="flex flex-col gap-1">
        {gamesList.map((game) => {
          return (
            <div
              key={game.id}
              onMouseEnter={() => {
                setActiveImage(game.imgUrl);
              }}
            >
              <Link to={`game/${game.id}`}>
                {game.id === "1" ? (
                  <CarouselTab
                    active={true}
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
