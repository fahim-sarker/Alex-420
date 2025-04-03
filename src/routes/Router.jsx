import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/public/Home";
import PricingPlan from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import Bar from "../pages/Bar/Bar";
import BarDrinks from "../pages/BarDrinks/BarDrinks";
import BarDashboard from "../layout/BarDashboardLayout";
import BarOrder from "@/pages/private/bar/BarOrder";
import BarInventory from "@/pages/private/bar/BarInventory";
import BarStaffs from "./../pages/private/bar/BarStaffs";
import BarSettings from "./../pages/private/bar/BarSettings";
import BarChats from "@/pages/private/bar/BarChats";
import ProfileDetails from "@/pages/private/bar/ProfileDetails";
import BarStatistics from "@/pages/private/bar/BarStatistics";
import Signup from "@/pages/Auth/Signup/Signup";
import Login from "@/pages/Auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "pricing", element: <PricingPlan /> },
      { path: "contact", element: <Contact /> },
      { path: "bar", element: <Bar /> },
      { path: "bar-drinks", element: <BarDrinks /> },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "bar-dashboard",
    element: <BarDashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <BarOrder />,
      },
      {
        path: "inventory",
        element: <BarInventory />,
      },
      {
        path: "staffs",
        element: <BarStaffs />,
      },
      {
        path: "statistics",
        element: <BarStatistics />,
      },
      {
        path: "settings",
        element: <BarSettings />,
      },
      {
        path: "chat",
        element: <BarChats />,
      },
      {
        path: "profile-details",
        element: <ProfileDetails />,
      },
    ],
  },
]);
