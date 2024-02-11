import image from "../../assets/images/fifa-1/fifa-1.jpeg";

import ProductSidebar from "./ProductSidebar";

const ProductPreview = () => {
  return (
    <section className="">
      <article>
        <h1 className="text-5xl">EA SPORTS FC 24 Standard Edition</h1>
      </article>
      <article className="grid grid-cols-product gap-16 max-w-7xl">
        <div className="flex flex-col gap-16">
          <img src={image} alt="" className="rounded-md" />
          <p className="text-xl">
            EA SPORTS FC™ 24 welcomes you to The World’s Game: the most
            true-to-football experience ever with HyperMotionV, PlayStyles
            optimised by Opta, and an enhanced Frostbite™ Engine.
          </p>
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <div className=" w-[1px] opacity-60 bg-white"></div>
              <div>
                <p className="opacity-75 font-light ">Genres</p>
                <p className=" underline">Simulation</p>
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
        <ProductSidebar />
      </article>
    </section>
  );
};
export default ProductPreview;
