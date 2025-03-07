import React from "react";
import Newslatterbg from "../../assets/images/Pricing/newslatter.png";
import Container from "../../Shared/Container";
import Newslattercard from "../ReusableComponents/Newslattercard";
import Newscardimage from "../../assets/images/Pricing/newscardimage.png";
import Newscardimage1 from "../../assets/images/Pricing/newscardimage1.png";
import Newscardimage2 from "../../assets/images/Pricing/newscardimage2.png";
import Newscardimage3 from "../../assets/images/Pricing/newscardimage3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Newslatter = () => {


  return (
    <section className="relative pt-[102px] pb-[89px]">
      <div className="mt-10 overflow-hidden">
        <Container className="relative z-20">
          <h4 className="text-[20px] text-[#000] font-normal text-center">
            All News
          </h4>
          <h3 className="text-[48px] text-[#000] font-normal font-instrument pb-10 text-center capitalize pt-2">
            Stay informed via our newsletters
          </h3>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            modules={[Pagination]}
            className="newslatter !overflow-visible"
          >
            <SwiperSlide className="w-fit">
              <Newslattercard imgSrc={Newscardimage} title="Smoke Porter" />
            </SwiperSlide>
            <SwiperSlide>
              <Newslattercard imgSrc={Newscardimage1} title="Craft Beer" />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <Newslattercard
                  imgSrc={Newscardimage2}
                  title="Irish Red Beer"
                />
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <Newslattercard imgSrc={Newscardimage3} title="Irish Red Beer" />
            </SwiperSlide>
            <SwiperSlide>
              <Newslattercard imgSrc={Newscardimage1} title="Smoke Porter" />
            </SwiperSlide>
           
          </Swiper>
        </Container>
      </div>
      <figure>
        <img
          src={Newslatterbg}
          alt="Newslatterbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </figure>
    </section>
  );
};

export default Newslatter;
