import { Skeleton } from "@/components/ui/skeleton";

function CarouselSkeleton() {
  return (
    <article className=" max-w-6xl grid grid-cols-1 md:grid-cols-carousel gap-8">
      <Skeleton className="w-full h-full" />
      <div className="flex md:flex-col md:overflow-hidden overflow-y-hidden overflow-x-scroll gap-2">
        {[1, 2, 3, 4, 5].map((game) => {
          return (
            <div className=" flex gap-4 p-4 min-w-fit h-20 " key={game}>
              <Skeleton className=" w-14 h-14 " />
              <Skeleton className=" w-full h-4 " />
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default CarouselSkeleton;
