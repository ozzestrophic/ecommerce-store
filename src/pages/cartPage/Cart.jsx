import { useContext } from "react";
import { cartContext } from "../../App.jsx";
import CartItem from "./CartItem.jsx";
import CartSideBar from "./CartSideBar.jsx";

const Cart = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <div className=" w-full max-w-7xl">
      <h1 className=" text-left text-3xl mb-8">My Cart</h1>
      <div className="grid gap-8 grid-cols-carousel">
        <section className="flex flex-col gap-8">
          <CartItem />
          <CartItem />
          {/* {cartItems.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })} */}
        </section>
        <CartSideBar />
      </div>
    </div>
  );
};
export default Cart;
