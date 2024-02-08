import storeIcon from "../assets/images/Store.svg";

const Nav = () => {
  return (
    <nav className=" flex h-[8vh] items-center justify-between bg-[#18181D] px-12 text-white">
      <img src={storeIcon} alt="" className="w-14" />
      <div>Cart</div>
    </nav>
  );
};
export default Nav;
