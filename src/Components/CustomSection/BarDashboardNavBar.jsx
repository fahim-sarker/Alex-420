import { ChatIcon, NotificationIcon } from "@/assets/icons/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const BarDashboardNavBar = () => {
  return (
    <section className="nav-bar px-10 py-7 bg-[#0F0F0F] w-full flex items-center justify-end sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6 leading-none text-white text-lg font-medium">
          <div className=""></div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-0 cursor-pointer">
              <div className=" border border-[#DBA514] rounded-full p-1">
                <NotificationIcon className="size-5 fill-white" />
              </div>
              <h4 className="">Notifications</h4>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={"w-[500px]"}
              side="bottom"
              align="end"
            >
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Array(12)
                .fill(null)
                .map((_, idx) => (
                  <DropdownMenuItem key={idx}>
                    <div className=" border border-black rounded-full p-1">
                      <NotificationIcon className="size-5 fill-black" />
                    </div>
                    <p>
                      Happy Hour Alert: Enjoy 2-for-1 Cocktails Today from 5 PM
                      to 7 PM!
                    </p>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="chat" className="flex items-center gap-2">
            <div className=" border border-[#DBA514] rounded-full p-1">
              <ChatIcon className="size-5" />
            </div>
            <h4 className="">Chat</h4>
          </Link>
        </div>
        <Link to="/bar-dashboard/profile-details" className="flex items-center gap-2 leading-none text-black text-lg font-medium bg-[#DBA514] py-2 px-3 rounded-[4px]">
          <img
            src="https://i.ibb.co.com/d018P7Sf/image.png"
            alt=""
            className="size-[30px] rounded-full shrink-0"
          />
          <h3>Johsan Rathi</h3>
        </Link>
      </div>
    </section>
  );
};

export default BarDashboardNavBar;
