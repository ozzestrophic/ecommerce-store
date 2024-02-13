import { useContext } from "react";
import { cartContext } from "../../App.jsx";
import PreviewSidebarTab from "./PreviewSidebarTab";
import { Link } from "react-router-dom";

const PreviewSidebar = ({ game }) => {
  const { addToCart, cartItems } = useContext(cartContext);
  const handleAddToCart = () => {
    if (!cartItems.includes(game)) {
      // this doesn't work because object is recreated for every page load
      addToCart(game);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="py-1 px-2 bg-gray-800 text-xs w-fit rounded-md">
        <p>BASE GAME</p>
      </div>
      <p>$69.99</p>
      <div className="flex flex-col gap-2 uppercase">
        <button
          className=" bg-epicBlue p-3 rounded-md hover:bg-blue-500"
          onClick={handleAddToCart}
        >
          {cartItems.includes(game) ? (
            <Link to="/cart" className="">
              View in cart
            </Link>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
      <PreviewSidebarTab leftText="Epic Rewards" rightText="Earn 5% Back" />
      <PreviewSidebarTab leftText="Refund Type" rightText="Self Refundable" />
      <PreviewSidebarTab leftText="Developer" rightText="EA Canda" />
      <PreviewSidebarTab leftText="Publisher" rightText="Electronic Arts" />
      <PreviewSidebarTab leftText="Release Date" rightText="09/29/23" />
      <PreviewSidebarTab leftText="Platform" rightText="" />
    </div>
  );
};
export default PreviewSidebar;
