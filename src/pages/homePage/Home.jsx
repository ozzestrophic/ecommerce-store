import Carousel from "./Carousel";
import FeatureDiscounts from "./FeatureDiscounts";
import supabase from "../../config/supabaseClient";

import { useEffect, useState } from "react";
import CarouselSkeleton from "./CarouselSkeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [gamesList, setGamesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        .eq("discount", "0")
        .gte("currentPrice", "20")
        .limit(5);
      if (error) {
        setFetchError("couldn't fetch games");
        setGamesList(null);
        console.log(fetchError);
      }
      if (data) {
        setGamesList(data);
        setFetchError(null);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="flex flex-col gap-8">
      {loading ? <CarouselSkeleton /> : <Carousel gamesList={gamesList} />}
      <FeatureDiscounts gamesList={gamesList} />
    </section>
  );
};
export default Home;
