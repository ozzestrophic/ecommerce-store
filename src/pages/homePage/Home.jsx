import Carousel from "./Carousel";
import FeatureDiscounts from "./FeatureDiscounts";

import { useEffect, useState } from "react";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getGamesList = async () => {
      try {
        const data = await fetch("http://localhost:4000/games");
        const filteredData = await data.json();

        setGamesList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getGamesList();
  }, []);

  return (
    <section>
      <Carousel gamesList={gamesList} />
      <FeatureDiscounts gamesList={gamesList} />
    </section>
  );
};
export default Home;
