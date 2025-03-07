import React from "react";
import Container from "../../Shared/Container";
import Missioncard from "../ReusableComponents/Missioncard";
import Missioncard1 from "../../assets/images/Contact/missioncard1.png"
import Missioncard2 from "../../assets/images/Contact/missioncard2.png"
import Missioncard3 from "../../assets/images/Contact/missioncard3.png"

const OurMission = () => {
  return (
    <section className="bg-[#FFF] py-[90px]">
      <Container>
        <h4 className="text-[36px] text-[#000] uppercase font-normal font-instrument text-center tracking-[1.44px]">
        Our Mission
        </h4>
        <p className="text-[#000] text-[16px] font-normal pt-5 pb-[60px] text-center max-w-[850px] mx-auto">
        At SipSavvy, our mission is to transform the way people experience the alcohol industry. We aim to bridge the gap between customers, bar staff, and owners by offering a seamless platform that fosters convenience, efficiency, and growth.Through innovative tools and real-time updates, we strive to
            </p>
            <div className="flex gap-x-[70px] justify-center">
                <Missioncard imgSrc={Missioncard1} imgAlt={Missioncard1} title='Empower customers' para=' To enjoy their favorite drinks and discovernew experiences effortlessly.'/>
                <Missioncard imgSrc={Missioncard2} imgAlt={Missioncard1} title='Support bar staff' para='With streamlined operations and communication tools.'/>
                <Missioncard imgSrc={Missioncard3} imgAlt={Missioncard1} title='Drive business success' para='For bar owners with powerful management and marketing solutions.'/>
            </div>
      </Container>
    </section>
  );
};

export default OurMission;
