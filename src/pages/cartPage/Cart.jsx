import { useContext } from "react";
import { cartContext } from "../../App.jsx";

const Cart = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <div>
      {cartItems.map((item) => {
        return <div key={item.id}>{item}</div>;
      })}
    </div>
  );
};
export default Cart;
