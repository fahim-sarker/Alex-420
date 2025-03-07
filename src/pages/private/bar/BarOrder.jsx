// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import DialogReceipt from "@/Components/CustomSection/DialogReceipt";
import { useState } from "react";

const BarOrder = () => {
  const [receipt, setReceipt] = useState(false);

  return (
    <section className="pt-12">
      <section className="px-10 overflow-hidden pb-2.5">
        <h2 className="text-xl font-semibold mb-6 ">Ordered</h2>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Pagination]}
          className="!overflow-visible"
        >
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <SwiperSlide key={idx} className="!w-fit mb-12">
                <div className="bg-[#1f1f1f] flex gap-2.5 text-white p-[18px] rounded-[6px] w-[420px] border border-[#C8C8C8]">
                  <div className="left shrink-0">
                    <figure className="w-[135px] h-full rounded-[6px] border border-[#DBA514] flex justify-center items-center">
                      <img
                        src="https://i.ibb.co.com/84S5d37z/bottole.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl tracking-[0.6px] font-instrument mb-2 line-clamp-1">
                      Mouton Cadet Bordeaux Rouge
                    </h3>
                    <div className="flex items-center justify-between">
                      <h4>Id: #5464</h4>
                      <div className="px-2 rounded-[4px] leading-none border border-[#DBA514]">
                        <p className="text-xs">Paid</p>
                      </div>
                    </div>
                    <h4>Table: 02</h4>
                    <div className="flex items-center justify-between">
                      <h4>Date : 12/12/2024</h4>
                      <h4>Time : 8.00 PM</h4>
                    </div>
                    <h4 className="mb-3">Quantity : 02</h4>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">$100.99</h3>
                      <button
                        type="button"
                        className={cn(
                          `hover:bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] border border-[#F1B906] block py-1.5 px-6 rounded-[6px] text-center text-lg font-medium leading-none tracking-[0.54px] text-white hover:text-[#0E0E0E] transition-all duration-300 group`
                        )}
                      >
                        Ready
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className="px-10 overflow-hidden bg-[#EDEDED] pb-2.5 pt-7 border-t">
        <h2 className="text-xl font-semibold mb-6">Ready to serve</h2>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Pagination]}
          className="!overflow-visible"
        >
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <SwiperSlide key={idx} className="!w-fit mb-12">
                <div className="bg-[#fafafa] flex gap-2.5 text-[#181818] p-[18px] rounded-[6px] w-[420px] border border-[#C8C8C8]">
                  <div className="left shrink-0">
                    <figure className="w-[135px] h-full rounded-[6px] border border-[#C8C8C8] flex justify-center items-center">
                      <img
                        src="https://i.ibb.co.com/84S5d37z/bottole.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl tracking-[0.6px] font-instrument mb-2 line-clamp-1">
                      Mouton Cadet Bordeaux Rouge
                    </h3>
                    <div className="flex items-center justify-between">
                      <h4>Id: #5464</h4>
                      <div className="px-2 rounded-[4px] leading-none border border-[#DBA514]">
                        <p className="text-xs">Paid</p>
                      </div>
                    </div>
                    <h4>Table: 02</h4>
                    <div className="flex items-center justify-between">
                      <h4>Date : 12/12/2024</h4>
                      <h4>Time : 8.00 PM</h4>
                    </div>
                    <h4 className="mb-3">Quantity : 02</h4>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">$100.99</h3>
                      <button
                        type="button"
                        className={cn(
                          `hover:bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] border border-[#F1B906] block py-1.5 px-6 rounded-[6px] text-center text-lg font-medium leading-none tracking-[0.54px] text-[#181818] hover:text-[#0E0E0E] transition-all duration-300 group`
                        )}
                      >
                        Serve
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className="px-10 overflow-hidden pb-2.5 pt-7 border-t">
        <h2 className="text-xl font-semibold mb-6">Served</h2>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Pagination]}
          className="!overflow-visible"
        >
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <SwiperSlide key={idx} className="!w-fit mb-12">
                <div className="bg-[#fafafa] flex gap-2.5 text-[#181818] p-[18px] rounded-[6px] w-[420px] border border-[#C8C8C8]">
                  <div className="left shrink-0">
                    <figure className="w-[135px] h-full rounded-[6px] border border-[#C8C8C8] flex justify-center items-center">
                      <img
                        src="https://i.ibb.co.com/84S5d37z/bottole.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl tracking-[0.6px] font-instrument mb-2 line-clamp-1">
                      Mouton Cadet Bordeaux Rouge
                    </h3>
                    <div className="flex items-center justify-between">
                      <h4>Id: #5464</h4>
                      <div className="px-2 rounded-[4px] leading-none border border-[#DBA514]">
                        <p className="text-xs">Paid</p>
                      </div>
                    </div>
                    <h4>Table: 02</h4>
                    <div className="flex items-center justify-between">
                      <h4>Date : 12/12/2024</h4>
                      <h4>Time : 8.00 PM</h4>
                    </div>
                    <h4 className="mb-3">Quantity : 02</h4>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">$100.99</h3>
                      <button
                        type="button"
                        className={cn(
                          `border border-transparent block py-1.5 px-6 rounded-[6px] text-center text-lg font-medium leading-none tracking-[0.54px] text-[#181818]`,
                          {
                            "bg-[#C8C8C8] border-[#C8C8C8] text-[#181818]":
                              idx % 2,
                            "bg-[#1F1F1F] border-[#1F1F1F] text-white":
                              idx % 2 == 0,
                          }
                        )}
                      >
                        {idx % 2 ? "Paid" : "Hand cash"}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className="px-10 overflow-hidden pb-2.5 pt-7 border-t">
        <h2 className="text-xl font-semibold mb-6">Receipt</h2>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Pagination]}
          className="!overflow-visible"
        >
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <SwiperSlide key={idx} className="!w-fit mb-12">
                <div className="bg-[#fafafa] flex gap-2.5 text-[#181818] p-[18px] rounded-[6px] w-[420px] border border-[#C8C8C8]">
                  <div className="left shrink-0">
                    <figure className="w-[135px] h-full rounded-[6px] border border-[#C8C8C8] flex justify-center items-center">
                      <img
                        src="https://i.ibb.co.com/84S5d37z/bottole.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl tracking-[0.6px] font-instrument mb-2 line-clamp-1">
                      Mouton Cadet Bordeaux Rouge
                    </h3>
                    <div className="flex items-center justify-between">
                      <h4>Id: #5464</h4>
                      <div className="px-2 rounded-[4px] leading-none border border-[#DBA514]">
                        <p className="text-xs">Paid</p>
                      </div>
                    </div>
                    <h4>Table: 02</h4>
                    <div className="flex items-center justify-between">
                      <h4>Date : 12/12/2024</h4>
                      <h4>Time : 8.00 PM</h4>
                    </div>
                    <h4 className="mb-3">Quantity : 02</h4>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">$100.99</h3>
                      <button
                        type="button"
                        onClick={() => setReceipt(true)}
                        className={cn(
                          `hover:bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] border border-[#F1B906] block py-1.5 px-6 rounded-[6px] text-center text-lg font-medium leading-none tracking-[0.54px] text-[#181818] hover:text-[#0E0E0E] transition-all duration-300 group`
                        )}
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <DialogReceipt receipt={receipt} setReceipt={setReceipt} />
    </section>
  );
};

export default BarOrder;
