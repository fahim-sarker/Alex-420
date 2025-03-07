import { GrowthIcon } from "@/assets/icons/icons";
import ProductSellCard from "@/Components/CustomComponents/ProductSellCard";
import SalesChart from "@/Components/CustomComponents/SalesChart";
import { useState } from "react";

const TotalRevenue = () => {
  const [graph2, setGraph2] = useState(false);

  return (
    <>
      <h2 className="text-xl font-semibold mt-12 mb-6">Revenue</h2>
      <section className="space-y-7">
        <section className="bg-[#F8F8FF] border border-[#DBA514] rounded-md overflow-hidden py-8 px-12">
          <h3 className="text-2xl font-bold font-poppins mb-8">
            Total Revenue
          </h3>
          <SalesChart className="bg-transparent" gold={true} />
          <div className="w-fit mx-auto mt-5">
            <p className="text-[#606060] font-medium inline-flex gap-1 items-center mb-[22px] p-2.5 border border-[#C8C8C8] rounded-[8px]">
              <GrowthIcon />
              <span className="text-[#00B69B] ">8.5% </span> Up from yesterday
            </p>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          <div className="card w-full bg-[#FAFAFA] border border-[#C8C8C8] rounded-[7px] p-5 space-y-6">
            <h4 className="font-instrument  tracking-[0.668px] text-[22px]">
              Total Item sold today
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">130</p>
              <button
                type="submit"
                className="bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] text-lg font-medium text-black px-4 py-1.5 leading-none rounded-md hover:shadow-xl cursor-pointer"
              >
                See details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TotalRevenue;
