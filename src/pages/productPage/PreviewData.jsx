const PreviewData = ({ game }) => {
  return (
    <article className="flex flex-col gap-16">
      <img src={game.imgUrl && game.imgUrl} alt="" className="rounded-md" />
      <p className="text-xl">
        EA SPORTS FC™ 24 welcomes you to The World’s Game: the most
        true-to-football experience ever with HyperMotionV, PlayStyles optimised
        by Opta, and an enhanced Frostbite™ Engine.
      </p>
      <div className="grid grid-cols-2">
        <div className="flex gap-4">
          <div className=" w-[1px] opacity-60 bg-white"></div>
          <div>
            <p className="opacity-75 font-light ">Publisher</p>
            <p className=" underline">{game.publisher}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" w-[1px] opacity-60 bg-white"></div>
          <div>
            <p className="opacity-75 font-light ">Genres</p>
            <p className=" underline">Simulation</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default PreviewData;
