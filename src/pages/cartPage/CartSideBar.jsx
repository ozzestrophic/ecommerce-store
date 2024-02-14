const CartSideBar = ({ priceTotal }) => {
  return (
    <aside className="flex flex-col gap-8">
      <h2 className="text-2xl">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-sm">
          <p>Price</p>
          <p>${priceTotal.oldTotal}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Discount</p>
          <p>-${priceTotal.oldTotal - priceTotal.currentTotal}</p>
        </div>
        <hr className="  border-gray-700" />
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p>${priceTotal.currentTotal}</p>
        </div>
      </div>
      <button className=" bg-epicBlue w-full p-4 rounded-lg">Check Out</button>
    </aside>
  );
};
export default CartSideBar;
