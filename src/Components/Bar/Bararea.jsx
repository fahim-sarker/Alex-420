import React, { useState } from "react";
import Container from "../../Shared/Container";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Bararea = () => {
  const [cardshow, setCardshow] = useState(9);
  const barsdata = [
    {
      id: 1,
      name: "Bar 1",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 1.2,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 2,
      name: "Bar 2",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 3.4,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 3,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 4,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 5,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 6,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 7,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 8,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 9,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 10,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 11,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
    {
      id: 12,
      name: "Bar 3",
      address: " Moronchand Misthanno Vandar",
      image: "src/assets/images/Bar/barman.png",
      distance: 2.1,
      storename: "Green Store Ltd.",
      description:
        "Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.",
      opentime: "Open:4.30PM-10PM",
      ratings: "4.5",
    },
  ];
  return (
    <section className="bg-[#FFF] pt-[100px] pb-[89px]">
      <Container>
        <div className="flex justify-between items-center pb-10">
          <h3 className="text-[48px] font-normal font-instrument text-[#000] leading-none">
            Bars in your area
          </h3>
          <div className="max-w-[392px] relative">
            <input
              type="text"
              placeholder="Search here"
              className="px-[33px] py-5 border border-[#DBA514] rounded-[8px] outline-none w-[392px]"
            />
            <Searchsvg className="absolute top-5 right-5" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-y-10">
          {barsdata.slice(0, cardshow).map((item,index) => (
            <Link to="/bar-drinks">
              <div
                key={index.id}
                className="w-[393px] group rounded-[4px] border-2 border-[#DBA514] flex flex-col group cursor-pointer"
              >
                <img src={item.image} alt={item.name} className="w-full" />
                <div className="px-3 pt-3 pb-[19px] group-hover:bg-black duration-300 ease-in-out cursor-pointer rounded-b-[4px]">
                  <div className="flex gap-x-1">
                    <CiLocationOn className="fill-black h-5 w-5 group-hover:fill-white" />
                    <h3 className="text-[14px] group-hover:text-[#FFF] text-black font-normal">
                      {item.address}
                    </h3>
                  </div>
                  <h2 className="text-[24px] group-hover:text-[#FFF] text-black font-normal pt-2 pb-1 font-instrument">
                    {item.storename}
                  </h2>
                  <p className="group-hover:text-[#FFF] text-black text-[16px] font-normal">
                    {item.description}
                  </p>
                  <div className="flex justify-between pt-[14px]">
                    
                    <h4 className="text-[16px] group-hover:text-[#FFF] text-black font-normal font-instrument flex gap-x-1 items-center">
                      {item.ratings}
                      <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </h4>
                    <p className="text-[16px] group-hover:text-[#FFF] text-black font-normal">
                      {item.opentime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {cardshow < barsdata.length && (
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center leading-none py-[17px] px-[56px] capitalize font-semibold text-[18px] rounded-lg bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] backdrop-blur-[6.5px] text-[#0E0E0E] mt-10 cursor-pointer tracking-[0.72px]"
              onClick={() => setCardshow(barsdata.length)}
            >
              See All
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Bararea;

const Locationsvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <g clip-path="url(#clip0_20026_67)">
      <path
        d="M9.49906 4.79249C10.1642 4.79249 10.7654 5.0541 11.1995 5.47434C11.4214 5.68756 11.598 5.9434 11.7185 6.22651C11.8391 6.50963 11.9013 6.81419 11.9013 7.12192C11.9013 7.42965 11.8391 7.73421 11.7185 8.01733C11.598 8.30044 11.4214 8.55628 11.1995 8.7695C10.7438 9.20879 10.1348 9.45335 9.50185 9.45135C8.86788 9.45407 8.25785 9.20946 7.80139 8.7695C7.5795 8.55628 7.40296 8.30044 7.28236 8.01733C7.16177 7.73421 7.09961 7.42965 7.09961 7.12192C7.09961 6.81419 7.16177 6.50963 7.28236 6.22651C7.40296 5.9434 7.5795 5.68756 7.80139 5.47434C8.25715 5.03505 8.86606 4.79049 9.49906 4.79249ZM10.7793 5.88346C10.4358 5.55173 9.97655 5.36702 9.49906 5.36859C8.99811 5.36859 8.54725 5.5634 8.21885 5.88346C8.05236 6.0439 7.91993 6.23627 7.82947 6.44906C7.73901 6.66185 7.69239 6.8907 7.69239 7.12192C7.69239 7.35314 7.73901 7.58199 7.82947 7.79478C7.91993 8.00757 8.05236 8.19994 8.21885 8.36038C8.54725 8.68044 8.99811 8.87525 9.49906 8.87525C10 8.87525 10.4537 8.68044 10.7793 8.36317C10.9462 8.20268 11.079 8.01014 11.1697 7.79709C11.2604 7.58404 11.3072 7.35487 11.3072 7.12331C11.3072 6.89175 11.2604 6.66258 11.1697 6.44953C11.079 6.23648 10.9462 6.04394 10.7793 5.88346Z"
        fill="white"
      />
      <path
        d="M9.2365 16.2477C8.85244 15.5463 8.38767 14.7504 7.90063 13.921C6.87925 12.1677 5.76602 10.2696 5.15931 8.7946C4.94099 8.26494 4.82848 7.69766 4.82812 7.12476C4.82813 5.87238 5.35134 4.74246 6.19739 3.92423C7.08302 3.06916 8.26706 2.59295 9.49811 2.59671C10.7301 2.59222 11.9153 3.06849 12.8016 3.92423C13.4429 4.54148 13.8839 5.33714 14.0675 6.20804C14.2511 7.07895 14.1688 7.98493 13.8313 8.80852C13.2191 10.2835 12.1198 12.1705 11.0984 13.9127C10.6141 14.742 10.1466 15.5408 9.7625 16.2504C9.73626 16.2973 9.69795 16.3362 9.65156 16.3633C9.60516 16.3903 9.55237 16.4044 9.49868 16.4041C9.44499 16.4038 9.39236 16.3892 9.34625 16.3617C9.30014 16.3341 9.26225 16.2948 9.2365 16.2477ZM8.41828 13.6371C8.80235 14.2912 9.17249 14.9257 9.49811 15.5046C9.82651 14.9201 10.1994 14.2828 10.5835 13.626C11.5938 11.9005 12.6847 10.0358 13.2831 8.59144C13.4768 8.12481 13.5761 7.62443 13.5753 7.1192C13.5753 6.02823 13.1189 5.04024 12.3814 4.32778C11.6076 3.58128 10.5733 3.16594 9.49811 3.17002C8.37375 3.17002 7.35515 3.61253 6.61764 4.32778C6.05816 4.86438 5.67241 5.55638 5.51018 6.31442C5.34796 7.07246 5.41671 7.86173 5.70757 8.58031C6.29758 10.0136 7.40246 11.8977 8.41828 13.6371Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_20026_67">
        <rect width="19" height="19" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M13.0478 14.9558C12.5146 15.3356 9.09371 12.9284 8.43853 12.9231C7.78335 12.9178 4.32395 15.2697 3.79702 14.8814C3.2701 14.4931 4.50887 10.505 4.31146 9.88208C4.11404 9.25914 0.801874 6.70512 1.00935 6.08541C1.21687 5.46571 5.40337 5.40815 5.93651 5.0284C6.46966 4.6487 7.88206 0.718393 8.53729 0.723638C9.19242 0.728929 10.541 4.68145 11.0679 5.06972C11.5949 5.45796 15.7799 5.58293 15.9774 6.20587C16.1748 6.82881 12.8218 9.3292 12.6143 9.9489C12.4068 10.5686 13.5809 14.5761 13.0478 14.9558Z"
      fill="#F8B84E"
    />
  </svg>
);

const Searchsvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    className={className}
  >
    <path
      d="M15.7445 15.7753C16.8605 14.4244 17.5653 12.6916 17.5653 10.7827C17.5653 6.49486 14.0705 3 9.78267 3C5.49486 3 2 6.49486 2 10.7827C2 15.0705 5.49486 18.5653 9.78267 18.5653C11.6623 18.5653 13.4244 17.8899 14.7753 16.7445L20.8253 22.7944C20.9721 22.9413 21.1483 23 21.3245 23C21.5007 23 21.6769 22.9413 21.8238 22.7944C22.0881 22.5301 22.0881 22.0602 21.8238 21.7959L15.7445 15.7753ZM9.7533 17.1557C6.22908 17.1557 3.38032 14.3069 3.38032 10.7827C3.38032 7.25844 6.22908 4.40969 9.7533 4.40969C13.2775 4.40969 16.1263 7.25844 16.1263 10.7827C16.1263 14.3069 13.2775 17.1557 9.7533 17.1557Z"
      fill="black"
    />
  </svg>
);
