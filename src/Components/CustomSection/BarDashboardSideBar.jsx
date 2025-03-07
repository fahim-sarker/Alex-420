import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  {
    name: "Order",
    link: "/bar-dashboard",
  },
  {
    name: "Inventory",
    link: "/bar-dashboard/inventory",
  },
  {
    name: "Staffs",
    link: "/bar-dashboard/staffs",
  },
  {
    name: "Statistics",
    link: "/bar-dashboard/statistics",
  },
  {
    name: "Settings",
    link: "/bar-dashboard/settings",
  },
];

const BarDashboardSideBar = () => {
  const location = useLocation().pathname;

  return (
    <section className="h-full">
      <div className=" h-full w-[350px] bg-[#222222] px-16 pb-20 pt-12 flex flex-col justify-between gap-20">
        <Link to={"/bar-dashboard"}>
          <h2 className="text-[#F1B906] text-4xl font-bold text-center">
            Sipawayy
          </h2>
        </Link>
        <div className="flex flex-col gap-[30px] flex-grow">
          {tabs.map((tab, idx) => (
            <Link
              key={idx}
              to={tab.link}
              className={cn(
                `w-full hover:bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] border border-[#F1B906] block py-4 rounded-[6px] text-center text-lg font-medium leading-normal tracking-[0.54px] text-white hover:text-[#0E0E0E] transition-all duration-300 group`,
                {
                  "bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] text-[#0E0E0E]":
                    location === tab.link,
                }
              )}
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-[115%] origin-top">
                {tab.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="">
          <button
            className={cn(
              `w-full hover:bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] border border-[#F1B906] block py-4 rounded-[6px] text-center text-lg font-medium leading-normal tracking-[0.54px] text-white hover:text-[#0E0E0E] transition-all duration-300 group cursor-pointer`
            )}
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  );
};

export default BarDashboardSideBar;
