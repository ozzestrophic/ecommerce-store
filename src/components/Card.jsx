const Card = ({ image, title, discount, oldPrice, currentPrice }) => {
  return (
    <div className=" flex flex-col gap-4 max-w-48">
      <img src={image} alt="" className="object-cover rounded-2xl h-60 " />
      <div className="flex flex-col gap-1 h-10 w-full  ">
        <p className=" text-gray-500 text-xs tracking-widest">BASE GAME</p>
        <h3 className=" ">{title}</h3>
      </div>
      <div className="flex gap-2">
        <p className=" bg-blue-600 text-white px-2 py-1 rounded-md text-xs w-fit">
          -50%
        </p>
        <p className=" text-gray-500 line-through">$7.99</p>
        <p className=" ">$7.99</p>
      </div>
    </div>
  );
};

export default Card;
