import { useContext } from "react";
import currentCategoryContext from "./categoryContext";
import { Button } from "@/components/ui/button";

const CategoriesTabs = ({ category }) => {
  const { setCategory } = useContext(currentCategoryContext);
  return (
    <Button
      variant="ghost"
      onClick={() => {
        setCategory(category);
      }}
      className="w-full flex justify-start "
    >
      {category}
    </Button>
  );
};
export default CategoriesTabs;
