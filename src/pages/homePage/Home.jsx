import Carousel from "./Carousel";
import FeatureDiscounts from "./FeatureDiscounts";

import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  const gamesCollectionRef = collection(db, "Games");

  useEffect(() => {
    const getGamesList = async () => {
      try {
        const data = await getDocs(gamesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGamesList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getGamesList();
  }, [gamesCollectionRef]);

  return (
    <section>
      <Carousel gamesList={gamesList} />
      <FeatureDiscounts gamesList={gamesList} />
    </section>
  );
};
export default Home;
