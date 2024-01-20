import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Outlet } from "react-router-dom";
import useNavAutohide from "../../../hooks/useNavAutohide";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { IoIosClose } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";
import { FaFolder } from "react-icons/fa";

export default function BrowseLayout() {
  const { isLoading, data: groupLists } = useQuery({
    queryKey: ["getGroupsLists"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/group/getall`
      );
      if (data) return data;
      throw Error();
    },
  });

  const { isVisible } = useNavAutohide();

  return (
    <div className="flex">
      <div className="grow">
        <Outlet />
      </div>

      <section className={twMerge("container-2 fixed bottom-0")}>
        <Popover className="relative">
          <Popover.Button
            disabled={isLoading}
            className={`absolute bottom-4 right-0 max-lg:right-4 w-11 bg-darkblue-800 h-11 rounded-lg border border-white/5 
            flex items-center justify-center
            ease-out transition-all duration-75 ${
              isVisible && "-translate-y-11"
            }`}
          >
            {isLoading ? (
              <CgSpinner size={18} className="animate-spin" />
            ) : (
              <FaFolder />
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
              as={Fragment}
              className={`absolute bottom-4 right-4 z-10
            ${isVisible && "-translate-y-11"}`}
            >
              <div className="max-w-screen rounded-md text-sm bg-darkblue-800 flex items-end border border-white/5">
                <section className="grid grid-cols-2 grow p-4 gap-2">
                  {!isLoading &&
                    groupLists.map((group) => (
                      <div
                        key={group.id}
                        className="bg-white/10 px-4 py-2 rounded"
                      >
                        {group.title}
                      </div>
                    ))}
                    <div className="bg-white/10 px-4 py-2 rounded">asd</div>
                </section>
                <Popover.Button className="bg-white/10 p-2 rounded-full mr-2 mb-2">
                  <IoIosClose size={20} />
                </Popover.Button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </section>
    </div>
  );
}
