import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import ComicCard from "../../components/ComicCard";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { SkeletonLatestComics } from "../../components/Skeletons";
import { twMerge } from "tailwind-merge";
import { fakeLoad } from "../../../hooks/useFakeLoad";
import BrowsePageNoComics from "../../components/BrowsePageNoComics";

export default function Browse() {
  const { page: p, source } = useParams();
  const page = parseInt(p) || 1;

  // api url selector
  const url =
    source !== "all"
      ? `${
          import.meta.env.VITE_API_URL
        }/comic/getallex?page=${page}&source=${source}`
      : `${import.meta.env.VITE_API_URL}/comic/getall?page=${page}&ex=yes`;
  //

  // fetch query
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
  //

  // group data
  const { data: sourceall } = useOutletContext();
  const sourcedata = sourceall?.find((s) => s.slug === source) ?? undefined;
  const sourcetitle = sourcedata?.title || "_";
  const sourcelink = sourcedata?.link || "_";
  ////

  const isPrev = page <= 1;
  const isNext = data && data.isNext;

  return (
    <div>
      <section className="text-center py-32 rounded-lg flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">
            {source !== "all" ? sourcetitle : "All Collections"}
          </h1>

          <span className="text-white/[0.45] text-sm">
            {source !== "all" ? sourcelink : "_"}
          </span>
        </section>

        <span className="text-white/70 text-lg">Page {page}</span>
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

      {!isLoading && data.data.length < 1 && <BrowsePageNoComics />}

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

        <div className="py-[0.6rem] px-5 shrink-0 bg-white/10 rounded">
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
