import { useContext } from "react";
import currentCategoryContext from "./categoryContext";

const CategoriesTabs = ({ category }) => {
  const { setCategory } = useContext(currentCategoryContext);
  return (
    <div className="flex p-4 hover:bg-gray-700 rounded-md cursor-pointer">
      <button
        onClick={() => {
          setCategory(category);
        }}
      >
        {category}
      </button>
    </div>
  );
};
export default CategoriesTabs;
