import { Link } from "react-router-dom";
import storeIcon from "../assets/images/Store.svg";
import { useContext } from "react";
import { cartContext } from "../App.jsx";

const Nav = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <nav className=" flex h-[8vh] items-center justify-between bg-[#18181D] px-12 text-white">
      <Link to="/">
        <img src={storeIcon} alt="" className="w-14" />
      </Link>
      <div className="flex gap-2">
        <p>Cart</p>
        {cartItems.length !== 0 && cartItems.length}
      </div>
    </nav>
  );
};
export default Nav;
