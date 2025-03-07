import React from "react";
import Planbg from "../../assets/images/Homepage/Pricingplan.png";
import Container from "../../Shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PricingCard from "../ReusableComponents/PricingCard";

const PricingHero = () => {
  return (
    <section className="relative pt-[207px] pb-[138px]">
      <Container className="relative z-20">
        <h3 className="text-[48px] text-[#FFF] font-normal font-instrument pt-7 pb-5 text-center capitalize leading-none">
          Flexible <span className="text-[#EEB609]"> Pricing Packages</span> to
          Suit Your Needs
        </h3>
        <p className="text-[24px] font-normal text-[#FFF] text-center pt-6 pb-[50px] px-[120px]">
          Choose the right package for responding to Alcohol orders. Whether you
          need a set number of responses or unlimited access, we have options
          that fit your workflow.
        </p>
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

export default PricingHero;
