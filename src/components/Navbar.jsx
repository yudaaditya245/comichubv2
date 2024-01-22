import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBookOpen, FaGear } from "react-icons/fa6";
import { RiHomeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
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
          <section className="flex gap-2 container-2 bg-dark-800/95 backdrop-blur-sm items-center rounded-t-md ">
            <section className="flex grow justify-around pt-4 pb-5 px-3">
              <NavLink to="/"
                className={({ isActive }) => `w-full flex justify-center items-center gap-2 ${isActive && "text-cyan-400"}`}>
                <RiHomeFill size={17} />
                <span className="text-[0.9rem] hidden md:block">Home</span>
              </NavLink>
              <NavLink to="/browse"
                className={({ isActive }) => `w-full flex justify-center items-center gap-2 ${isActive && "text-cyan-400"}`}>
                <FaBookOpen />
                <span className="text-[0.9rem] hidden md:block">Browse</span>
              </NavLink>
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
