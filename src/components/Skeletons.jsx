import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export function SkeletonLatestComics({ length = 18, show = true }) {
  const array = Array.from({ length });

  return array.map((_, index) => (
    <Transition
      key={index}
      as={Fragment}
      show={show}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-75"
      enterTo="transform opacity-100 scale-100"
    >
      <li className="flex w-full flex-col gap-4 translate-y-">
        <div className="aspect-[3/4.5] animate-pulse rounded bg-cyan-600/30"></div>
        <div className="h-4 w-[80%] animate-pulse rounded bg-cyan-600/30"></div>
      </li>
    </Transition>
  ));
}
