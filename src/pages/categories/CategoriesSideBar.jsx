import { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient";
import CategoriesTabs from "./CategoriesTabs";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <aside className=" min-w-[300px] p-4 rounded-lg flex flex-col gap-4">
      <Card>
        <ul>
          {categories.current.map((item) => (
            <li key={item.id}>
              <CategoriesTabs category={item.category} />
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  );
};
export default CategoriesSideBar;
