import { Link } from "react-router-dom";
import storeIcon from "../assets/images/Store.svg";

const Nav = () => {
  return (
    <nav className=" flex h-[8vh] items-center justify-between bg-[#18181D] px-12 text-white">
      <Link to="/">
        <img src={storeIcon} alt="" className="w-14" />
      </Link>
      <div>Cart</div>
    </nav>
  );
};
export default Nav;
