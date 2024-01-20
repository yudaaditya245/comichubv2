import { Link, Outlet } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { FaBookOpen, FaGear } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ScrollTop from "../ScrollTop";

export default function LayoutWithNav() {
  return (
    <div className="flex flex-col container-2 min-h-[100svb] pb-[4rem]">
      <div className="grow">
        <Outlet />
      </div>

      <nav className="fixed bottom-0 left-0 w-full">
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

          <ScrollTop className="px-4 py-2 border-l border-white/10 shrink-0" />
        </section>
      </nav>
    </div>
  );
}
