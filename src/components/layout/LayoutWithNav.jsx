import { Outlet } from "react-router-dom";

export default function LayoutWithNav() {
  return (
    <div className="flex gap-10 bg-blue-400">
      <Outlet />
      <nav className="bg-red-500">LayoutWithNav lorem10</nav>
    </div>
  );
}
