import { GrowthIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const ProductSellCard = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "p-[18px] rounded-[6px] border border-[#DBA514] bg-[#FAFAFA] grid grid-cols-3 gap-3 cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="left p-3 border border-[#C8C8C8] rounded-[6px]">
        <figure className="w-full h-full overflow-hidden">
          <img
            src="https://i.ibb.co.com/84S5d37z/bottole.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="right col-span-2">
        <h4 className="text-[22px] tracking-[0.668px] font-instrument mb-1">
          Mouton Cadet Bordeaux Rouge{" "}
        </h4>
        <p>Id: #5464</p>
        <p className="text-[#606060] font-medium inline-flex gap-1 items-center mb-[22px]">
          <GrowthIcon />
          <span className="text-[#00B69B] ">8.5% </span> Up from yesterday
        </p>
        <p className="text-2xl font-semibold tracking-[0.668px]">$100.99</p>
      </div>
    </div>
  );
};

export default ProductSellCard;
