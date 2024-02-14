import Carousel from "./Carousel";
import FeatureDiscounts from "./FeatureDiscounts";
import supabase from "../../config/supabaseClient";

import { useEffect, useState } from "react";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select().limit(5);
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
    <section>
      <Carousel gamesList={gamesList} />
      <FeatureDiscounts gamesList={gamesList} />
    </section>
  );
};
export default Home;
