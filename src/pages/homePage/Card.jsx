const Card = ({ game }) => {
  return (
    <div className=" flex flex-col justify-between h-full max-w-48">
      <img
        src={game.imgUrl}
        alt=""
        className="object-cover rounded-2xl h-60 "
      />
      <div className="flex flex-col gap-1 w-full  ">
        <h3 className=" ">{game.title}</h3>
        <p className=" text-gray-500 text-xs tracking-widest">
          {game.publisher}
        </p>
      </div>
      <div className="flex gap-2">
        {game.discount !== 0 && (
          <p className=" bg-blue-600 text-white px-2 py-1 rounded-md text-xs w-fit">
            {game.discount}%
          </p>
        )}
        {game.discount !== 0 && (
          <p className=" text-gray-500 line-through">{game.oldPrice}</p>
        )}

        <p className=" ">{game.currentPrice}</p>
      </div>
    </div>
  );
};

export default Card;
