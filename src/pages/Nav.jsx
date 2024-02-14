import { Link } from "react-router-dom";
import storeIcon from "../assets/images/Store.svg";
import { useContext } from "react";
import { cartContext } from "../App.jsx";

const Nav = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <nav className=" flex h-[8vh] items-center justify-between bg-[#18181D] px-12 text-white">
      <Link to="/">
        {/* <img src={storeIcon} alt="" className="w-14" /> */}
        <h3 className="font-bold text-lg uppercase">Awesome eStore</h3>
      </Link>
      <Link to="cart" className="flex items-center gap-2">
        <p>Cart</p>

        {cartItems.length !== 0 && (
          <p className=" px-2 py-1 bg-white text-black rounded-lg">
            {cartItems.length}
          </p>
        )}
      </Link>
    </nav>
  );
};
export default Nav;
