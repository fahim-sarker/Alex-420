import React from "react";

const CustomerReusablecard = ({ Icon, title, subtitle }) => {
  return (
    <div className="py-[38px] px-3 border-[0.2px] border-[#DBA514]/30 rounded-[8px] h-[210px] w-[277px] flex flex-col items-center cursor-pointer">
      <div className="flex justify-center">
        {Icon && <Icon className="flex justify-center h-12" />}
      </div>
      <h4 className="text-[14px] text-[#fff] font-normal text-center pt-6 pb-2 font-instrument">
        {title}
      </h4>
      <h5 className="text-[12px] text-[#fff] font-normal text-center max-w-[252px]">
        {subtitle}
      </h5>
    </div>
  );
};

export default CustomerReusablecard;
