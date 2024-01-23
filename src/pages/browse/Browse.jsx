import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import ComicCard from "../../components/ComicCard";
import { Link, useSearchParams } from "react-router-dom";
import { SkeletonLatestComics } from "../../components/Skeletons";
import { twMerge } from "tailwind-merge";

export default function Browse() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("p")) || 1;

  const { isLoading, data } = useQuery({
    queryKey: ["getComics", page],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/comic/getall?page=${page}&ex=yes`
      );
      if (data) return data;
      throw Error();
    },
  });

  const isPrev = page <= 1;
  const isNext = data && data.isNext ? false : true;

  return (
    <div>
      <section className="text-center font-medium p-20 rounded-lg flex flex-col gap-2">
        <h1 className="text-2xl">All Comics</h1>
        <span className="text-white/70">Page {!data ? "..." : data.page}</span>
      </section>

      {isLoading ? (
        <div className="p-4">
          <SkeletonLatestComics show={isLoading} />
        </div>
      ) : data.data.length < 1 ? (
        <main className="flex justify-center px-4 md:px-0">
          <div className="p-5 bg-white/5 rounded-md flex justify-center w-full text-white/70">
            Woops! No comics
          </div>
        </main>
      ) : (
        <main className="grid grid-cols-3 gap-x-4 gap-y-6 overflow-hidden md:grid-cols-6 p-4 md:px-0">
          {data.data.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
              label={comic.main_id ? false : true}
            />
          ))}
        </main>
      )}

      <section className="p-4 md:px-0 flex gap-3 justify-around mt-3 text-[0.9rem]">
        <Link
          to={`?p=${page - 1}`}
          className={twMerge(
            "bg-white/10 w-full rounded flex justify-center items-center gap-1",
            isPrev && "pointer-events-none text-white/60 bg-white/5"
          )}
        >
          <MdKeyboardDoubleArrowLeft /> Previous
        </Link>

        <div className="py-2 px-5 shrink-0 bg-white/10 rounded">
          Page {page}
        </div>

        <Link
          to={`?p=${page + 1}`}
          className={twMerge(
            `bg-white/10 w-full rounded flex justify-center items-center gap-1`,
            isNext && "pointer-events-none text-white/60 bg-white/5"
          )}
          onClick={(e) => {
            if (isNext) {
              e.preventDefault();
            }
          }}
        >
          Next <MdKeyboardDoubleArrowRight />
        </Link>
      </section>
    </div>
  );
}
