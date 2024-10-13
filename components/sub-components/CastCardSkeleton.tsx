export default function CastCardSkeleton() {
  return (
    <div className="w-11/12 lg:w-full mx-auto flex flex-col gap-5 tracking-tighter">
      <div className="relative aspect-[3/4] h-[300px] rounded-2xl overflow-hidden bg-neutral-600 animate-pulse"></div>
      <div className="flex flex-col items-start w-full gap-2">
        <div className="bg-neutral-600 animate-pulse h-6 w-7/12 rounded-full"></div>
        <div className="bg-neutral-600 animate-pulse h-5 w-1/4 rounded-full"></div>
      </div>
    </div>
  );
}
