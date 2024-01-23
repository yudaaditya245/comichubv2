import { FaAngleRight } from "react-icons/fa";
import { formatDateAgo } from "../../utils/dateTime";

export default function ComicCard({ comic, label = false }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full aspect-[3/4.7] overflow-hidden rounded relative bg-cyan-600">
        {label && (
          <div className=" absolute top-0 flex w-full p-1 pb-3">
            <span className="rounded-md bg-black/60 px-3 py-1 text-[0.78rem] backdrop-blur-sm font-semibold text-white/85">
              {comic.source}
            </span>
          </div>
        )}

        <img
          loading="lazy"
          height="100px"
          src={comic.cover_img}
          alt={comic.title}
          className="w-full h-full object-cover text-xs"
        />

        <section className="flex items-center gap-2 absolute bottom-[-1px] pr-2 pl-3 py-[0.4rem] bg-gradient-to-t from-black/90 to-black/60 w-full backdrop-blur-sm">
          <section className="flex grow flex-col">
            <span className="text-[0.8rem] font-[700]">
              Chapter {comic.latest_chapter}
            </span>
            <span className="text-[0.75rem] text-white/60">
              {formatDateAgo(comic.updated_at)}
            </span>
          </section>
          <FaAngleRight />
        </section>
      </div>

      <h3 className="text-sm line-clamp-2 leading-6 px-[0.13rem]">{comic.title}</h3>
    </div>
  );
}
