import Card from "./Card";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/image-1.avif";

import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const FeatureDiscounts = () => {
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
    <article>
      <h3 className="text-lg font-light">Feature Discounts</h3>
      <div className=" grid grid-cols-6 gap-8 h-96 max-w-6xl mt-4">
        {gamesList.map((game) => {
          return (
            <Link key={game.id} to={`game/${game.id}`}>
              <Card image={image1} title={game.title} />
            </Link>
          );
        })}
      </div>
    </article>
  );
};
export default FeatureDiscounts;
