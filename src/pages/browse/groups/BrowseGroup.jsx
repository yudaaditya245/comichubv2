import { useParams } from "react-router-dom";

export default function BrowseGroup() {
  const { source } = useParams();
  return <div>BrowseGroup : {source}</div>;
}
