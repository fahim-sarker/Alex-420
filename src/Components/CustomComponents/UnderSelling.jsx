import ProductSellCard from "@/Components/CustomComponents/ProductSellCard";
import SalesChart from "@/Components/CustomComponents/SalesChart";
import { useState } from "react";

const UnderSelling = () => {
  const [graph1, setGraph1] = useState(false);
  const [graph2, setGraph2] = useState(false);

  return (
    <>
      <h2 className="text-xl font-semibold mt-12 mb-6">Under selling</h2>
      <section className="space-y-9">
        <div className="grid grid-cols-3 gap-[22px]">
          {Array(3)
            .fill(null)
            .map((_, idx) => (
              <ProductSellCard
                key={idx}
                onClick={() => {
                  setGraph1((prev) => !prev);
                  setGraph2(false);
                }}
              />
            ))}
        </div>
        {graph1 && (
          <section className="bg-[#F8F8FF] border border-[#DBA514] rounded-md overflow-hidden py-8 px-12">
            <h3 className="text-2xl font-bold font-poppins mb-8">
              Mouton Cadet Bordeaux Rouge{" "}
            </h3>
            <SalesChart className="bg-transparent" />
          </section>
        )}
        <div className="grid grid-cols-3 gap-[22px]">
          {Array(3)
            .fill(null)
            .map((_, idx) => (
              <ProductSellCard
                key={idx}
                onClick={() => {
                  setGraph2((prev) => !prev);
                  setGraph1(false);
                }}
                className={"border-[#C8C8C8]"}
              />
            ))}
        </div>
        {graph2 && (
          <section className="bg-[#F8F8FF] border border-[#DBA514] rounded-md overflow-hidden py-8 px-12">
            <h3 className="text-2xl font-bold font-poppins mb-8">
              Mouton Cadet Bordeaux Rouge{" "}
            </h3>
            <SalesChart className="bg-transparent" />
          </section>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] text-lg font-medium text-black px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer w-[204px]"
          >
            View all
          </button>
        </div>
      </section>
    </>
  );
};

export default UnderSelling;
