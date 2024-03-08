import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

// ==== components ====
import Card from "../homePage/Card";
import CategoriesSideBar from "./CategoriesSideBar";
import currentCategoryContext from "./categoryContext";

const Categories = () => {
  const { category } = useParams();
  console.log("category is ", category);
  const [currentCategory, setCurrentCategory] = useState(
    category ? category : "Action RPG"
  );

  const setCategory = (entry) => {
    setCurrentCategory(entry);
  };

  const [gamesList, setGamesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const supaGames = await supabase
        .from("categories")
        .select("id , category, games(*) ")
        .eq("category", currentCategory);

      if (supaGames.error) {
        setFetchError("couldn't fetch game IDs");
        console.log(fetchError);
      }
      if (supaGames.data) {
        setGamesList(supaGames.data[0].games);
        setFetchError(null);

        console.log(supaGames.data);
      }
    };

    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  return (
    <currentCategoryContext.Provider value={{ currentCategory, setCategory }}>
      <section>
        <h1 className="text-center text-2xl text-gray-500 mb-8">
          Current category{" "}
          <span className="text-center text-white font-bold text-2xl mb-8">
            {currentCategory}
          </span>
        </h1>
        {/* ====== fix the sidebar when games are empty ===== */}
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
    </currentCategoryContext.Provider>
  );
};
export default Categories;
