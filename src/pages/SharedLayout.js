import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Attribution from "../pages/Attribution";

function SharedLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <Attribution />
    </div>
  );
}

export default SharedLayout;
