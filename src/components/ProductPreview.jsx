import image from "../assets/images/fifa-1/fifa-1.jpeg";
import fifaLogo from "../assets/images/fifa-1/fifa-0.avif";

const ProductPreview = () => {
  return (
    <section className="grid grid-cols-product gap-12 max-w-7xl">
      <img src={image} alt="" className="rounded-md" />
      <div className="flex flex-col gap-4">
        <img src={fifaLogo} alt="" className=" p-16" />
        <div className="py-1 px-2 bg-gray-800 text-xs w-fit rounded-md">
          <p>BASE GAME</p>
        </div>
        <p>$69.99</p>
        <div className="flex flex-col gap-2">
          <button className=" bg-epicBlue p-3 rounded-md">Add to Cart</button>
          <button className=" border p-3 rounded-md">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
export default ProductPreview;
