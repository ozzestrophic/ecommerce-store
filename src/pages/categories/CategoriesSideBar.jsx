import CategoriesTabs from "./CategoriesTabs";

const CategoriesSideBar = () => {
  return (
    <aside className=" min-w-[300px] bg-gray-800 p-4 rounded-lg flex flex-col gap-4">
      <CategoriesTabs />
      <CategoriesTabs />
      <CategoriesTabs />
      <CategoriesTabs />
      <CategoriesTabs />
      <CategoriesTabs />
    </aside>
  );
};
export default CategoriesSideBar;
