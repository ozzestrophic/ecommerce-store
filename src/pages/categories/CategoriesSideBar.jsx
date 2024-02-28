import { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient";
import CategoriesTabs from "./CategoriesTabs";

const CategoriesSideBar = () => {
  const [fetchError, setFetchError] = useState(null);
  const categories = useRef([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select();
      if (error) {
        setFetchError("couldn't fetch category ID");
        console.log(fetchError);
      }
      if (data) {
        categories.current = data;
        setFetchError(null);
        console.log(categories.current);
      }
    };

    fetchCategories();
  }, []);
  return (
    <aside className=" min-w-[300px] bg-gray-800 p-4 rounded-lg flex flex-col gap-4">
      <ul>
        {categories.current.map((item) => (
          <li key={item.id}>
            <CategoriesTabs category={item.category} />
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default CategoriesSideBar;
