import { twMerge } from "tailwind-merge";
import useNavAutohide from "../../hooks/useNavAutohide";
import { FaFolder } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

export default function BrowseLayoutGroupMenu({ groupdata }) {
  const { isVisible } = useNavAutohide();
  const { isLoading, data: groupLists } = groupdata;

  return (
    <section
      className={twMerge(
        "bg-red-500 container-2 fixed bottom-0 transition-all duration-75 w-full",
        isVisible && "-translate-y-[3.6rem]"
      )}
    >
      <Popover>
        <Popover.Button
          disabled={isLoading}
          className={twMerge(
            "outline-none absolute bottom-[1.26rem] right-[1.26rem] md:right-0 bg-cyan-500 p-[0.85rem] rounded-lg text-white"
          )}
        >
          {isLoading ? (
            <CgSpinner size={18} className="animate-spin" />
          ) : (
            <FaFolder size={18} />
          )}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-[40ms]"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-[40ms]"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
        >
          <Popover.Panel
            className="absolute bottom-5 right-5 md:right-0 bg-dark-800 rounded-lg overflow-hidden
                        flex flex-col max-w-full"
          >
            {({ close }) => (
              <>
                <label className="bg-white/10 pl-5 pr-4 py-3 text-[0.9rem] font-semibold flex justify-between items-center">
                  Source
                  <button
                    className="bg-cyan-600 p-[0.1rem] text-white rounded"
                    onClick={close}
                  >
                    <IoClose size={17} />
                  </button>
                </label>
                <section className="grid grid-cols-2 gap-1 p-1">
                  <Link
                    to="/browse"
                    className={twMerge(
                      "text-sm rounded flex flex-col hover:bg-white/10 px-4 py-2"
                    )}
                    onClick={close}
                  >
                    <span className="font-medium flex gap-[0.35rem] items-center">
                      <MdCollectionsBookmark className="mb-[0.1rem]" />
                      All
                    </span>
                    <span className="hidden xxs:block text-xs text-white/50">
                      Show all collection
                    </span>
                  </Link>

                  {!isLoading &&
                    groupLists.map((group) => (
                      <NavLink
                        to={`/browse/${group.slug}`}
                        key={group.id}
                        className={({ isActive }) =>
                          twMerge(
                            "text-sm rounded flex flex-col hover:bg-white/10 px-4 py-2",
                            isActive && "bg-white/10"
                          )
                        }
                        onClick={close}
                      >
                        <span className="font-medium">{group.title}</span>
                        <span className="hidden xxs:block text-xs text-white/50">
                          {group.link}
                        </span>
                      </NavLink>
                    ))}
                </section>
              </>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
}
