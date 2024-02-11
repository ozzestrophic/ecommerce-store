import { Link, useLoaderData } from "react-router-dom";
import image1 from "../../assets/images/image-1.avif";
import CarouselTab from "./CarouselTab";

const Carousel = () => {
  const games = useLoaderData();
  console.log(games);

  return (
    <article className=" max-w-6xl grid grid-cols-carousel gap-8 font-light">
      <img
        src={image1}
        alt=""
        className="rounded-2xl w-full h-full object-cover"
      />
      <div className="flex flex-col gap-1">
        {games.map((game) => {
          return (
            <Link key={game.id} to={`game/${game.id}`}>
              {game.id === "1" ? (
                <CarouselTab active={true} image={game.img} name={game.title} />
              ) : (
                <CarouselTab key={game.id} image={game.img} name={game.title} />
              )}
            </Link>
          );
        })}
      </div>
    </article>
  );
};
export default Carousel;
