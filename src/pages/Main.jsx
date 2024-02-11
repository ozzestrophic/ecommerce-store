import Home from "./homePage/Home";
import ProductPreview from "./productPage/ProductPreview";

const Main = () => {
  return (
    <main className=" box-border flex flex-col items-center bg-[#121212] p-8 text-white font-PlusJakartaSans ">
      <Home />
      <ProductPreview />
    </main>
  );
};
export default Main;
