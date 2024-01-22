import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";
import ComicCard from "../../components/ComicCard";

export default function Browse() {
  const { isPending, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["getComicsInfinity"],
      queryFn: async ({ pageParam }) => {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/comic/getall?page=${pageParam}&ex=yes`
        );
        if (data) return data;
        throw Error("No data");
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.isNext ? parseInt(lastPage.page) + 1 : undefined;
      },
      staleTime: 5 * (60 * 1000),
    });

  return (
    <div>
      {isPending ? (
        "loading..."
      ) : (
        <section className="p-4 flex flex-col gap-5">
          <h1 className="text-center font-medium text-2xl p-20 rounded-lg">
            All Comics
          </h1>

          <ul className="grid grid-cols-3 gap-x-5 gap-y-7 overflow-hidden md:grid-cols-6">
            {data.pages.map((data, index) => (
              <Fragment key={index}>
                {data.data.map((comic) => (
                  <li key={comic.id}>
                    <ComicCard
                      comic={comic}
                      label={comic.main_id ? false : true}
                    />
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>

          {isFetchingNextPage || isPending || !hasNextPage ? (
            <div className="mt-10 flex w-full items-center justify-center gap-2 rounded bg-white/10 p-3">
              <span className="text-[0.94rem] text-white/55 font-semibold">
                Thats it!
              </span>
            </div>
          ) : (
            <button
              onClick={fetchNextPage}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded bg-white/10 p-3"
            >
              <span className="flex items-center gap-2 text-[0.94rem] font-semibold">
                Browse more
              </span>
            </button>
          )}
        </section>
      )}
    </div>
  );
}
