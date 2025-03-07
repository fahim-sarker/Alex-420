import React from "react";
import Planbg from "../../assets/images/Homepage/Pricingplan.png";
import Container from "../../Shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PricingCard from "../ReusableComponents/PricingCard";

const Pricingplan = () => {
  return (
    <section className="relative">
      <Container className="pt-[112px] pb-[159px] relative z-20">
        <div className="flex justify-center">
          <a
            href=""
            className="border-[0.2px] border-[#DBA514]/30 px-4 py-2 text-[20px] capitalize font-medium font-ITCKabelStd rounded-[32px] text-[#E9B20C] leading-none"
          >
            Subscription
          </a>
        </div>
        <h3 className="text-[48px] text-[#FFF] font-normal font-instrument pt-7 pb-5 text-center capitalize">
          Our Pricing Plan
        </h3>
        <Tabs>
          <TabList className="w-fit mx-auto border-b-[1px] border-[rgba(251,251,255,0.23)] flex justify-center pb-[10px]">
            <Tab className="text-white rounded-md cursor-pointer px-4">
              For User
            </Tab>
            <Tab className="text-white rounded-md cursor-pointer px-4">
              For Staff
            </Tab>
          </TabList>

          <TabPanel className="mt-10 ">
            <div className="flex gap-x-[27px] justify-center">
              <PricingCard customBG="bg-[#444]" title="Basic" />
              <PricingCard customBG="bg-[#232323]" title="Monthly" />
              <PricingCard customBG="bg-[#0F0F0F]" title="Annual" />
            </div>
          </TabPanel>
          <TabPanel>
          <div className="flex gap-x-[27px] justify-center">
              <PricingCard customBG="bg-[#444]" title="Basic" />
              <PricingCard customBG="bg-[#232323]" title="Monthly" />
              <PricingCard customBG="bg-[#0F0F0F]" title="Annual" />
            </div>
          </TabPanel>
        </Tabs>
      </Container>
      <figure>
        <img
          src={Planbg}
          alt="Planbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </figure>
    </section>
  );
};

export default Pricingplan;
