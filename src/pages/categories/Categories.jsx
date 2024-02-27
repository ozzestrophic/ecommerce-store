import { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient";
import Card from "../homePage/Card";
import CategoriesSideBar from "./CategoriesSideBar";
import { Link } from "react-router-dom";

const Categories = () => {
  const [gamesList, setGamesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [category, setCategory] = useState("Action RPG");

  const categoryId = useRef("");
  const gamesListIds = useRef([]);

  // ============ fetch from local serve =============
  // useEffect(() => {
  //   const fetchGames = async () => {
  //     const fetchedgames = await fetch("http://localhost:4000/games");
  //     const gamesListArray = await fetchedgames.json();
  //     setGamesList(gamesListArray);
  //   };

  //   fetchGames();
  // }, []);

  // fetch from supabase =========

  useEffect(() => {
    const fetchId = async () => {
      const supaCategoryId = await supabase
        .from("categories")
        .select("id")
        .eq("category", category)
        .single();

      if (supaCategoryId.error) {
        setFetchError("couldn't fetch category ID");
        console.log(fetchError);
      }
      if (supaCategoryId.data) {
        categoryId.current = supaCategoryId.data;
        setFetchError(null);
      }
    };

    const fetchGameIDs = async () => {
      const supaGamesIDs = await supabase
        .from("categoriesGamesRel")
        .select("gameID")
        .eq("categoryID", categoryId.current.id);

      if (supaGamesIDs.error) {
        setFetchError("couldn't fetch game IDs");
        console.log(fetchError);
      }
      if (supaGamesIDs.data) {
        let array = supaGamesIDs.data.map((data) => data.gameID);
        gamesListIds.current = array;
        setFetchError(null);
      }
    };

    const fetchGames = async () => {
      const supaGames = await supabase
        .from("games")
        .select()
        .in("id", gamesListIds.current);

      if (supaGames.error) {
        setFetchError("couldn't fetch game IDs");
        console.log(fetchError);
      }
      if (supaGames.data) {
        setGamesList(supaGames.data);
        setFetchError(null);
      }
    };
    const fetchFunc = async () => {
      await fetchId();
      await fetchGameIDs();
      await fetchGames();
    };

    fetchFunc();
  }, [category]);

  return (
    <section>
      <h1 className="text-center text-4xl mb-8">Categories</h1>
      <div className="flex gap-8">
        <CategoriesSideBar />
        <div className="flex flex-1 flex-wrap gap-4">
          {gamesList.map((game) => {
            return (
              <Link to={`/game/${game.id}`} key={game.id}>
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
