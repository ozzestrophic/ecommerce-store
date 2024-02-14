const CartItem = ({ game }) => {
  return (
    <article className=" bg-zinc-800 w-full flex gap-8 p-10">
      <img
        src="src/assets/images/image-1.avif"
        alt=""
        className=" w-32 h-44 object-cover"
      />
      <div className="flex justify-between w-full">
        <div>
          <p className="bg-zinc-600 text-xs p-1 rounded-sm w-fit">
            {game.publisher}
          </p>
          <h3 className=" mt-4 text-2xl">{game.title}</h3>
        </div>
        <div className="flex flex-col justify-between items-end">
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
          <button className="border border-zinc-600 p-2 rounded-lg text-zinc-400">
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
