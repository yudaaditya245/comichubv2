import { Outlet } from "react-router-dom";
import BrowseLayoutGroupMenu from "../BrowseLayoutGroupMenu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function BrowseLayout() {
  const _getGroup = useQuery({
    queryKey: ["getGroupLists"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/group/getall`
      );
      if (data) return data;
      throw Error();
    },
  });

  return (
    <div className="flex">
      <div className="grow">
        <Outlet context={_getGroup} />
      </div>

      <BrowseLayoutGroupMenu groupdata={_getGroup} />
    </div>
  );
}
