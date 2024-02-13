const CartItem = () => {
  return (
    <article className=" bg-zinc-800 w-full flex gap-8 p-10">
      <img
        src="src/assets/images/image-1.avif"
        alt=""
        className=" w-32 h-44 object-cover"
      />
      <div className="flex justify-between w-full">
        <div>
          <p className="bg-zinc-600 text-xs p-1 rounded-sm w-fit">Base Game</p>
          <h3 className=" mt-4 text-2xl">Fifa 2024</h3>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-2 h-fit items-center">
            <span className=" bg-epicBlue p-1 text-xs rounded-sm">-40%</span>
            <span className=" line-through text-zinc-500">$13.99</span>
            <span>$9.39</span>
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
