import React from "react";
import Enjoymentbg from "../../assets/images/Homepage/enjoyment.png";
import Container from "../../Shared/Container";

const Enjoyment = () => {
  return (
    <section className="relative">
      <Container className="py-[170px] relative z-20">
        <h3 className="text-[48px] text-[#fff] font-normal font-instrument pb-10 capitalize text-center">
          Your Gateway to Effortless Enjoyment
        </h3>
        <p className="text-[24px] font-normal text-[#fff] text-center">
          Explore a world where convenience meets quality, and connections lead
          to unforgettable experiences.
        </p>
        <div className="flex justify-center">
          <button className="flex justify-center items-center leading-none py-[14.5px]  px-[67px] capitalize font-semibold text-[18px] rounded-lg bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] backdrop-blur-[6.5px] text-[#0E0E0E] cursor-pointer mt-[60px] tracking-[0.72px]">
            Get Started Today
          </button>
        </div>
      </Container>

      <figure>
        <img
          src={Enjoymentbg}
          alt="Enjoymentbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </figure>
    </section>
  );
};

export default Enjoyment;
