import { useContext } from "react";
import currentCategoryContext from "./categoryContext";

const CategoriesTabs = ({ category }) => {
  const { setCategory } = useContext(currentCategoryContext);
  return (
    <button
      onClick={() => {
        setCategory(category);
      }}
      className="flex p-4 hover:bg-gray-700 rounded-md w-full cursor-pointer"
    >
      {category}
    </button>
  );
};
export default CategoriesTabs;
