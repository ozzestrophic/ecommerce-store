import { useEffect, useState } from "react";
// import supabase from "../../config/supabaseClient";
import Card from "../homePage/Card";
import CategoriesSideBar from "./CategoriesSideBar";
import { Link } from "react-router-dom";

const Categories = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gamesList = await fetch("http://localhost:4000/games");
      const gamesListArray = await gamesList.json();
      setGames(gamesListArray);
    };

    fetchGames();
  }, []);

  // const [category, setCategory] = useState("Action RPG");
  // let [categoryId, setCategoryId] = useState("");
  // let [gamesListIds, setGamesListIds] = useState([]);
  // //   const [gamesList, setGamesList] = useState([]);
  // const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   const fetchFunc = async () => {
  //     const fetchId = async () => {
  //       const supaCategoryId = await supabase
  //         .from("categories")
  //         .select("id")
  //         .eq("category", category)
  //         .single();

  //       if (supaCategoryId.error) {
  //         setFetchError("couldn't fetch games");
  //         setCategoryId(null);
  //         console.log(fetchError);
  //       }
  //       if (supaCategoryId.data) {
  //         setCategoryId(supaCategoryId.data);
  //         setFetchError(null);
  //         console.log(categoryId);
  //       }
  //     };

  //     const fetchGameIDs = async () => {
  //       const supaGamesIDs = await supabase
  //         .from("categoriesGamesRel")
  //         .select("gameID")
  //         .eq("categoryID", categoryId);

  //       if (supaGamesIDs.error) {
  //         setFetchError("couldn't fetch games");
  //         setGamesListIds(null);
  //         console.log(fetchError);
  //       }
  //       if (supaGamesIDs.data) {
  //         setGamesListIds(supaGamesIDs.data);
  //         setFetchError(null);
  //         console.log(gamesListIds);
  //       }
  //     };

  //     await fetchId();
  //     await fetchGameIDs();

  //     //   const supaGamesList = await supabase
  //   };

  //   fetchFunc();
  // }, [category]);

  return (
    <section>
      <h1 className="text-center text-4xl mb-8">Categories</h1>
      <div className="flex gap-8">
        <CategoriesSideBar />
        <div className="flex flex-1 flex-wrap gap-4">
          {games.map((game) => {
            return (
              <Link to={`game/${game.id}`} key={game.id}>
                <Card game={game} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Categories;
