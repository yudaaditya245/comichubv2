import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBookOpen, FaGear } from "react-icons/fa6";
import { RiHomeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import useNavAutohide from "../../hooks/useNavAutohide";

export default function Navbar() {
  const { isVisible } = useNavAutohide();

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full">
        <Transition
          as={Fragment}
          show={isVisible}
          enter="transition ease-out duration-75"
          enterFrom="transform opacity-0 translate-y-6"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-y-00"
          leaveTo="transform opacity-0 translate-y-6"
        >
          <section className="flex gap-2 container-2 bg-darkblue-800/95 backdrop-blur-sm items-center rounded-t-md ">
            <section className="flex grow justify-around py-4 px-3">
              <Link
                to="/"
                className="w-full flex justify-center items-center gap-2"
              >
                <RiHomeFill size={17} />
                <span className="text-[0.9rem] hidden md:block">Home</span>
              </Link>
              <Link
                to="/browse"
                className="w-full flex justify-center items-center gap-2"
              >
                <FaBookOpen />
                <span className="text-[0.9rem] hidden md:block">Browse</span>
              </Link>
              <button className="w-full flex justify-center items-center gap-2">
                <FaSearch size={15} />
                <span className="text-[0.9rem] hidden md:block">Search</span>
              </button>
              <button className="w-full flex justify-center items-center gap-2">
                <FaGear />
                <span className="text-[0.9rem] hidden md:block">Settings</span>
              </button>
            </section>

            <ScrollTop className="pl-4 pr-5 py-1 border-l border-white/10 shrink-0" />
          </section>
        </Transition>
      </nav>
    </>
  );
}
