import { createContext } from "react";

const currentCategoryContext = createContext({
  currentCategory: "",
  setCategory: () => {},
});

export default currentCategoryContext;
