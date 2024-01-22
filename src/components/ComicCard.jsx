import { BsFire } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { formatDateAgo } from "../../utils/dateTime";

export default function ComicCard({ comic, label = false }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full aspect-[3/4.7] overflow-hidden rounded-lg relative bg-cyan-600">
        {label && (
          <div className="absolute top-0 flex w-full justify-end bg-gradient-to-b from-black/50 to-transparent p-1 pb-3">
            <span className="rounded-bl-lg rounded-tr bg-cyan-600/75 px-2 text-[0.8rem] font-semibold backdrop-blur-sm">
              {comic.source}
            </span>
          </div>
        )}

        <img
          src={comic.cover_img}
          alt={comic.title}
          className="w-full h-full object-cover text-xs"
        />

        <section className="flex items-center gap-2 absolute bottom-[-1px] px-3 py-2 bg-gradient-to-t from-black/80 to-black/50 w-full backdrop-blur-sm">
          <section className="flex grow flex-col">
            <span className="text-[0.8rem] font-[700]">
              Chapter {comic.latest_chapter}
            </span>
            <span className="text-[0.75rem] text-white/70">
              {formatDateAgo(comic.updated_at)}
            </span>
          </section>
          <FaAngleRight />
        </section>
      </div>

      <h3 className="text-sm line-clamp-2 leading-6">
        {label && (
          <BsFire className="inline-block -mt-1 mr-[0.3rem] text-red-500 animate-pulse" />
        )}
        {comic.title}
      </h3>
    </div>
  );
}
