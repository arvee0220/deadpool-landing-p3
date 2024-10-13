import { CastProps } from "../section/Cast";
import Image from "next/image";
import CastCardSkeleton from "./CastCardSkeleton";

export default function CastCard({
  cast,
  loading,
}: {
  cast: CastProps;
  loading: boolean;
}) {
  const CardDisplay = (
    <div className="w-auto flex flex-col gap-5 tracking-tighter">
      <div className="relative aspect-[3/4] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={cast.img}
          alt={cast.castName}
          fill
          className="absolute object-cover bg-center"
          priority
        />
      </div>
      <div className="flex flex-col items-start w-full gap-2">
        <span className="text-deadpool-primary font-semibold text-xl">
          {cast.castName}
        </span>
        <span className="text-neutral-400 font-medium text-base">
          {cast.castRole}
        </span>
      </div>
    </div>
  );

  return <>{loading ? <CastCardSkeleton /> : CardDisplay}</>;
}
