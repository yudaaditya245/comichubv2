
import { Outlet } from "react-router-dom";
import BrowseLayoutGroupMenu from "../BrowseLayoutGroupMenu";

export default function BrowseLayout() {

  return (
    <div className="flex">
      <div className="grow">
        <Outlet />
      </div>

      <BrowseLayoutGroupMenu />
    </div>
  );
}
