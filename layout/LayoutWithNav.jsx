import { Outlet } from "react-router-dom";

export default function LayoutWithNav() {
  return (
    <>
      <div>LayoutWithNav</div>
      <Outlet />
    </>
  );
}
