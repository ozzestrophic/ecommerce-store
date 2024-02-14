import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App.jsx";

import CartItem from "./CartItem.jsx";
import CartSideBar from "./CartSideBar.jsx";

import supabase from "../../config/supabaseClient.js";

function calculateTotal(dataArray, key) {
  const totalNum = dataArray.reduce((total, item) => {
    return total + item[key];
  }, 0);
  return totalNum;
}

const Cart = () => {
  const { cartItems } = useContext(cartContext);

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

  return (
    <div className=" w-full max-w-7xl">
      <h1 className=" text-left text-3xl mb-8">My Cart</h1>
      <div className="grid gap-8 grid-cols-carousel">
        <section className="flex flex-col gap-8">
          {games &&
            games.map((game) => {
              return <CartItem key={game.id} game={game} />;
            })}
        </section>
        {priceTotal && <CartSideBar priceTotal={priceTotal} />}
      </div>
    </div>
  );
};
export default Cart;
