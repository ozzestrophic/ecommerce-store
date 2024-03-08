import { Skeleton } from "@/components/ui/skeleton";

function CardSkeleton() {
  return (
    <div className=" flex flex-col justify-between h-[350px]  cursor-pointer w-48 hover:scale-105 transition-all ease-out">
      <Skeleton className="object-cover rounded-2xl h-60 " />

      <div className="flex flex-col gap-2 w-full  ">
        <Skeleton className=" h-6 w-4/5" />
        <Skeleton className=" h-4 w-3/5" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="  px-2 py-1 rounded-md h-4 w-1/5" />

        <Skeleton className=" h-4 w-1/5" />

        <Skeleton className="h-4 w-1/5 " />
      </div>
    </div>
  );
}
export default CardSkeleton;
