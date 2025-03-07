import React from "react";
import Conatctherobg from "../../assets/images/Contact/contactherobg.png";
import Container from "../../Shared/Container";

const Hero = () => {
  return (
    <section className="relative pt-[272px] pb-[208px]">
      <Container className='relative z-20'>
        <h3 className="text-[48px] text-[#FFF] font-normal font-instrument pb-2 text-center capitalize tracking-[1.44px]">
        Let’s Raise a Glass to Connection!
        </h3>
        <div className="bg-[#EEB608] h-[2px] w-[257px] mx-auto"></div>
      </Container>
      <figure>
        <img
          src={Conatctherobg}
          alt="Conatctherobg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </figure>
    </section>
  );
};

export default Hero;
