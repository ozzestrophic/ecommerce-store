import Card from "./Card";
import Carousel from "./Carousel";

const Main = () => {
  return (
    <main className=" box-border flex h-[92vh] w-screen flex-col items-center bg-[#121212] p-8 text-white font-PlusJakartaSans ">
      <div>
        <Carousel />
        <Card />
      </div>
    </main>
  );
};
export default Main;
