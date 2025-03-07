import BarDashboardSideBar from "@/Components/CustomSection/BarDashboardSideBar";
import BarDashboardNavBar from "@/Components/CustomSection/BarDashboardNavBar";
import { Outlet } from "react-router-dom";

const BarDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden ">
      <BarDashboardSideBar />
      <div className="min-h-screen w-full overflow-auto flex flex-col">
        <BarDashboardNavBar />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BarDashboard;
