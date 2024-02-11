import Card from "./Card";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/image-1.avif";
// import botImage1 from "../../assets/images/bot-img-1.avif";
// import botImage2 from "../../assets/images/bot-img-2.avif";
// import botImage3 from "../../assets/images/bot-img-3.avif";
// import botImage4 from "../../assets/images/bot-img-4.avif";
// import botImage5 from "../../assets/images/bot-img-5.avif";

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
        {/* <Card image={botImage1} title="Other Game" />
        <Card image={botImage2} title="Game 3 title" />
        <Card image={botImage3} title="Game 3 title" />
        <Card image={botImage4} title="Game 3 title" />
        <Card image={botImage5} title="Game 3 title" /> */}
      </div>
    </article>
  );
};
export default FeatureDiscounts;
