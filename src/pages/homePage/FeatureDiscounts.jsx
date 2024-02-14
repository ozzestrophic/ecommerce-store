import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

const FeatureDiscounts = () => {
  const [gamesList, setGamesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        .neq("discount", "0")
        .limit(6);
      if (error) {
        setFetchError("couldn't fetch games");
        setGamesList(null);
        console.log(fetchError);
      }
      if (data) {
        setGamesList(data);
        setFetchError(null);
      }
    };

    fetchGames();
  }, []);

  return (
    <article>
      <h3 className="text-lg font-light">Featured Discounts</h3>
      <div className=" grid grid-cols-2 content-center md:grid-cols-6 gap-8 max-w-6xl mt-4">
        {gamesList.map((game) => {
          return (
            <Link key={game.id} to={`game/${game.id}`}>
              <Card game={game} />
            </Link>
          );
        })}
      </div>
    </article>
  );
};
export default FeatureDiscounts;
