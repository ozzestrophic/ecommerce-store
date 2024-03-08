import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App.jsx";

import CartItem from "./CartItem.jsx";
import CartSideBar from "./CartSideBar.jsx";

import supabase from "../../config/supabaseClient.js";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, clearCart } = useContext(cartContext);

  const [games, setGames] = useState();
  const [priceTotal, setPriceTotal] = useState();
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        .in("id", cartItems);

      if (error) {
        setFetchError("couldn't fetch games");
        setGames(null);
        console.log(fetchError);
      }
      if (data) {
        console.log("success");
        setGames(data);
        setFetchError(null);
      }
    };

    loadGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  useEffect(() => {
    if (games) {
      const total = {
        oldTotal: calculateTotal(games, "oldPrice"),
        currentTotal: calculateTotal(games, "currentPrice"),
      };
      setPriceTotal(total);
    }
  }, [games]);

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center flex-col gap-2 items-center">
        <h1 className="text-4xl">Your cart is empty</h1>
        <h3 className="text-xl opacity-75 font-light">
          Start adding items to your cart
        </h3>
        <Link to="/">
          <button className="mt-4 p-4 border-solid border-gray-600 border rounded-lg">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" w-full max-w-7xl">
      <h1 className=" text-left text-3xl mb-8">My Cart</h1>
      <div className="grid gap-8 md:grid-cols-carousel">
        <section className="flex flex-col gap-8">
          {games &&
            games.map((game) => {
              return <CartItem key={game.id} game={game} />;
            })}
        </section>
        {priceTotal && (
          <CartSideBar priceTotal={priceTotal} clearCart={clearCart} />
        )}
      </div>
    </div>
  );
};
export default Cart;

function calculateTotal(dataArray, key) {
  const totalNum = dataArray.reduce((total, item) => {
    return total + item[key];
  }, 0);
  return totalNum;
}
