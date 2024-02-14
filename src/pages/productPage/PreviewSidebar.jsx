import { useContext } from "react";
import { cartContext } from "../../App.jsx";
import PreviewSidebarTab from "./PreviewSidebarTab";
import { Link } from "react-router-dom";

const PreviewSidebar = ({ game }) => {
  const { addToCart, cartItems } = useContext(cartContext);
  const handleAddToCart = () => {
    if (!cartItems.includes(game.id)) {
      // this doesn't work because object is recreated for every page load
      addToCart(game.id);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="py-1 px-2 bg-gray-800 text-xs w-fit rounded-md">
        <p>BASE GAME</p>
      </div>
      <div className="flex gap-2 ">
        {game.discount !== 0 && (
          <p className=" bg-blue-600 text-white px-2 py-1 rounded-md text-xs w-fit">
            {game.discount}%
          </p>
        )}
        {game.discount !== 0 && (
          <p className=" text-gray-500 line-through">{game.oldPrice}</p>
        )}
        <p>{game.currentPrice}</p>
      </div>
      <div className="flex flex-col gap-2 uppercase">
        {cartItems.includes(game.id) ? (
          <Link to="/cart">
            <button className=" bg-epicBlue p-3 rounded-md w-full hover:bg-blue-500">
              View in cart
            </button>
          </Link>
        ) : (
          <button
            className=" bg-epicBlue p-3 rounded-md w-full hover:bg-blue-500"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
      <PreviewSidebarTab leftText="ESRB" rightText={game.esrbRating} />
      <PreviewSidebarTab leftText="Rating" rightText={game.rating} />
      <PreviewSidebarTab leftText="Developer" rightText={game.developer} />
      <PreviewSidebarTab leftText="Publisher" rightText={game.publisher} />
    </div>
  );
};
export default PreviewSidebar;
