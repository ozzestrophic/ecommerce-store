const CarouselTab = ({ image, name, active }) => {
  return (
    <div
      className={
        "flex items-center gap-4 p-4 hover:bg-[#363636] rounded-lg" +
        (active ? " bg-[#262626]" : " ")
      }
    >
      <img
        src={image}
        alt=""
        className=" w-10 h-14 rounded-lg object-cover bg-[] "
      />
      <h4>{name}</h4>
    </div>
  );
};
export default CarouselTab;
