import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

// ==== components ====
import Card from "../homePage/Card";
import CategoriesSideBar from "./CategoriesSideBar";
import currentCategoryContext from "./categoryContext";
import CardSkeleton from "../homePage/CardSkeleton";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
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
        setLoading(false);

        console.log(supaGames.data);
      }
    };

    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  return (
    <currentCategoryContext.Provider value={{ currentCategory, setCategory }}>
      <section>
        <div className="flex flex-col">
          <span className="text-center text-lg opacity-40 mb-8">
            Current category
          </span>
          <h1 className="text-center text-white font-bold text-2xl mb-8">
            {currentCategory}
          </h1>
        </div>
        {/* ====== fix the sidebar when responsive ===== */}
        <div className="flex sm:flex-row flex-col gap-8 w-svw md:p-10">
          <CategoriesSideBar />
          <div className="flex justify-center sm:justify-normal content-start flex-1 flex-wrap gap-4 ">
            {loading && [1, 2, 3, 4].map((item) => <CardSkeleton key={item} />)}
            {!loading && gamesList.length === 0 ? (
              <h2>There is no games in this category</h2>
            ) : (
              gamesList.map((game) => {
                return (
                  <Link to={`/game/${game.id}`} key={game.id}>
                    <Card game={game} />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
    </currentCategoryContext.Provider>
  );
};
export default Categories;
