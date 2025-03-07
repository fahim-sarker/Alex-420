import React from "react";
import Homeherobg from "../../assets/images/Homepage/Homebanner.png";
import Container from "../../Shared/Container";
import Herobottle from "../../assets/images/Homepage/Homebannerright.png"

const Hero = () => {
  return (
    <section className="relative">
      <Container>
        <div className="flex justify-between gap-x-[104px] items-center relative z-10 pb-[265px]">
          <div className="pt-[329px]">
            <a
              href=""
              className="border-[0.2px] border-[#DBA514]/30 px-4 py-2 text-[20px] capitalize font-medium font-ITCKabelStd rounded-[32px] text-[#E9B20C] leading-none"
            >
              Welcome to Sipawayy
            </a>
            <h3 className="text-[48px] text-[#FFF] font-normal font-instrument pt-7 pb-10">Revolutionizing the Way You Enjoy and Manage Drinks.</h3>
            <p className="text-[24px] font-normal text-[#FFF] max-w-[600px]">Seamless ordering, smart management tools, and real-time updates all in one platform built to elevate the alcohol industry.</p>
            <button className="flex justify-center items-center leading-none py-[14.5px]  px-[104px] capitalize font-semibold text-[18px] rounded-lg bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] backdrop-blur-[6.5px] text-[#0E0E0E] cursor-pointer mt-[60px] ">
            Try Today
            </button>
          </div>
          <div className="pt-[245px] translate-x-[150px]">
            <img src={Herobottle} alt="Herobottle" />
          </div>
        </div>
      </Container>
      <figure>
        <img
          src={Homeherobg}
          alt="Homeherobg"
          className="absolute top-0 left-0 w-full h-full"
        />
      </figure>
    </section>
  );
};

export default Hero;
