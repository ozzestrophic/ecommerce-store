import image1 from "../../assets/images/image-1.avif";
import CarouselTab from "./CarouselTab";

const Carousel = () => {
  return (
    <article className=" max-w-6xl grid grid-cols-carousel gap-8 font-light">
      <img
        src={image1}
        alt=""
        className="rounded-2xl w-full h-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <CarouselTab image={image1} name="Game Name" active={true} />
        <CarouselTab image={image1} name="Game name 2 is so long" />
        <CarouselTab image={image1} name="Number 3" />
        <CarouselTab image={image1} name="Game Name" />
        <CarouselTab image={image1} name="Game Name" />
        <CarouselTab image={image1} name="Game Name" />
      </div>
    </article>
  );
};
export default Carousel;
