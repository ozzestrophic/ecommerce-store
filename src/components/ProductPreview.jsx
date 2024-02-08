import image from "../assets/images/fifa-1/fifa-1.jpeg";

import ProductSidebar from "./ProductSidebar";

const ProductPreview = () => {
  return (
    <section className="grid grid-cols-product gap-16 max-w-7xl">
      <div className="flex flex-col gap-16">
        <img src={image} alt="" className="rounded-md" />
        <p className="text-xl">
          EA SPORTS FC™ 24 welcomes you to The World’s Game: the most
          true-to-football experience ever with HyperMotionV, PlayStyles
          optimised by Opta, and an enhanced Frostbite™ Engine.
        </p>

        <div>
          <p className="opacity-75 font-light">Genres</p>
          <p className=" underline">Simulation</p>
        </div>
      </div>
      <ProductSidebar />
    </section>
  );
};
export default ProductPreview;
