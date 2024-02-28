const CategoriesTabs = ({ category }) => {
  return (
    <div className="flex p-4 hover:bg-gray-700 rounded-md cursor-pointer">
      <p>{category}</p>
    </div>
  );
};
export default CategoriesTabs;
