import { useContext } from "react";
import { cartContext } from "../../App";

const CartItem = ({ game }) => {
  const { removeCartItem } = useContext(cartContext);

  return (
    <article className=" bg-zinc-800 w-full flex flex-col md:flex-row gap-8 p-4 md:p-10 ">
      <img
        src={game.imgUrl}
        alt=""
        className=" w-full md:w-32 h-44 object-cover"
      />
      <div className="flex md:flex-row gap-4 md:gap-0 flex-col justify-between w-full">
        <div>
          <p className="bg-zinc-600 text-xs p-1 rounded-sm w-fit">
            {game.publisher}
          </p>
          <h3 className=" mt-4 text-2xl">{game.title}</h3>
        </div>
        <div className="flex flex-col  gap-4 md:gap-0 items-stretch md:justify-between md:items-end">
          <div className="flex gap-2 h-fit items-center">
            {game.discount !== 0 && (
              <p className=" bg-blue-600 text-white px-2 py-1 rounded-md text-xs w-fit">
                {game.discount}%
              </p>
            )}
            {game.discount !== 0 && (
              <p className=" text-gray-500 line-through">{game.oldPrice}</p>
            )}
            <span>{game.currentPrice}</span>
          </div>
          <button
            className="border border-zinc-600 p-2 rounded-lg text-zinc-400"
            onClick={() => removeCartItem(game.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
