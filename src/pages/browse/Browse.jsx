import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import ComicCard from "../../components/ComicCard";
import { Link, useParams } from "react-router-dom";
import { SkeletonLatestComics } from "../../components/Skeletons";
import { twMerge } from "tailwind-merge";
import { fakeLoad } from "../../../hooks/useFakeLoad";

export default function Browse() {
  const { page: p, source } = useParams();
  const page = parseInt(p) || 1;

  const url =
    source !== "all"
      ? `${
          import.meta.env.VITE_API_URL
        }/comic/getallex?page=${page}&source=${source}`
      : `${import.meta.env.VITE_API_URL}/comic/getall?page=${page}&ex=yes`;

  const { isLoading, data } = useQuery({
    queryKey: ["getComics", source, page],
    queryFn: async () => {
      const [{ data }] = await Promise.all([
        axios.get(url),
        // give skeleton some loading time
        fakeLoad(200),
      ]);

      if (data) return data;
      throw Error();
    },
  });

  // console.log(!isLoading && data);
  const isPrev = page <= 1;
  const isNext = data && data.isNext;

  return (
    <div>
      <section className="text-center p-20 rounded-lg flex flex-col gap-3">
        <section className="flex flex-col">
          <h1 className="text-2xl font-medium ">
            {source !== "all" ? data && data.sourceDetail.title : "All Comics"}
          </h1>

          {source !== "all" && (
            <span className="text-white/50 text-[0.83rem]">
              {data && data.sourceDetail.link}
            </span>
          )}
        </section>

        <span className="text-white/70">Page {!data ? "__" : data.page}</span>
      </section>

      <main className="grid grid-cols-3 gap-x-4 gap-y-6 overflow-hidden md:grid-cols-6 px-4 md:px-0">
        <SkeletonLatestComics show={isLoading} />

        {!isLoading &&
          data.data.length > 0 &&
          data.data.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
              label={comic.main_id || source !== "all" ? false : true}
            />
          ))}
      </main>

      {!isLoading && data.data.length < 1 && (
        <main className="flex justify-center px-4 md:px-0">
          <div className="p-5 bg-white/5 rounded-md flex justify-center w-full text-white/70">
            Woops! No comics
          </div>
        </main>
      )}

      <section className="p-4 md:px-0 flex gap-3 justify-around mt-3 text-[0.9rem]">
        <Link
          to={`/browse/${source}/${page - 1}`}
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
          to={`/browse/${source}/${page + 1}`}
          className={twMerge(
            `bg-white/10 w-full rounded flex justify-center items-center gap-1`,
            !isNext && "pointer-events-none text-white/60 bg-white/5"
          )}
          onClick={(e) => {
            if (!isNext) {
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
