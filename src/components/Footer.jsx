import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full h-64 bg-[#18181D] p-10 sm:px-20 md:px-40 flex flex-col gap-10 justify-center ">
      <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0  items-center">
        <Link to="/" className="text-4xl">
          Awesome Store
        </Link>
        <div className=" flex flex-col gap-4 items-center md:items-end">
          <p className="text-sm opacity-50">Navigate to</p>
          <Link to="categories">Categories</Link>
          <Link to="cart" className="flex items-center gap-2">
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <p className="text-center text-sm">
        Made by{" "}
        <a
          className="hover:text-zinc-400"
          href="https://github.com/ozzestrophic"
          target="_blank"
          rel="noreferrer"
        >
          @ozzestrophic
        </a>{" "}
        | 2024
      </p>
    </footer>
  );
}
export default Footer;
