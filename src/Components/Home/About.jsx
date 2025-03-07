import React from "react";
import Container from "../../Shared/Container";
import Aboutbg from "../../assets/images/Homepage/aboutbg.png";

const About = () => {
  return (
    <section className="relative">
      <Container className="py-[144px] pl-[250px]">
        <div className="relative z-20">
          <a
            href=""
            className="border-[0.2px] border-[#0E0E0E]/30 px-4 py-2 text-[20px] capitalize font-medium font-ITCKabelStd rounded-[32px] text-[#000] leading-none"
          >
            Welcome to Sipawayy
          </a>
          <h3 className="text-[48px] text-[#000] font-normal font-instrument pt-7 pb-10 capitalize">
          Your Gateway to Effortless Enjoyment
          </h3>
          <p className="text-[24px] font-normal text-[#000] max-w-[900px]">
          Discover a revolutionary platform designed to bring your favorite drinks, bars, and events closer to you. Whether you’re a customer looking for convenience, a bar staff member aiming to streamline orders, or a bar owner ready to boost your business, we’ve got you covered.
          </p>
          <button className="flex justify-center items-center leading-none py-[14.5px]  px-[104px] capitalize font-semibold text-[18px] rounded-lg bg-[#000] backdrop-blur-[6.5px] text-[#fff] cursor-pointer mt-[60px] ">
            Try Today
          </button>
        </div>
      </Container>
      <figure>
        <img
          src={Aboutbg}
          alt="Aboutbg"
          className="absolute top-0 left-0 z-0 h-full w-full"
        />
      </figure>
    </section>
  );
};

export default About;
