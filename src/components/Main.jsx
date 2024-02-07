import Carousel from "./Carousel";
import FeatureDiscounts from "./FeatureDiscounts";

const Main = () => {
  return (
    <main className=" box-border flex flex-col items-center bg-[#121212] p-8 text-white font-PlusJakartaSans ">
      <div>
        <Carousel />
        <FeatureDiscounts />
      </div>
    </main>
  );
};
export default Main;
