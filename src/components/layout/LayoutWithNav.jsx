import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function LayoutWithNav() {
  

  return (
    <div className="flex flex-col container-2 min-h-[100svb] pb-[4rem]">
      <div className="grow">
        <Outlet />
      </div>

      <Navbar />
    </div>
  );
}
