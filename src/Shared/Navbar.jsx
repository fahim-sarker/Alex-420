import React from "react";
import Logo from "../assets/images/Logo/Sipawayy.png";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50">
      <Container>
        <div className="mt-[47px] rounded-[8px] font-ITCKabelStd border-[0.2px] border-[#DBA514]/30 bg-[rgba(42,46,53,0.20)] backdrop-blur-[10px] px-6 py-2 flex justify-between items-center">
          <div className="">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul className="flex gap-x-2">
            <li className="py-2 px-6 capitalize font-semibold text-[14px] text-[#F8F8FF] hover:text-[#E9B20C] duration-300 ease-in-out cursor-pointer">
              <Link Link="/">Home</Link>
            </li>
            <li className="py-2 px-6 capitalize font-semibold text-[14px] text-[#F8F8FF] hover:text-[#E9B20C] duration-300 ease-in-out cursor-pointer">
              <Link to="/bar">bars</Link>
            </li>
            <li className="py-2 px-6  capitalize font-semibold text-[14px] text-[#F8F8FF] hover:text-[#E9B20C] duration-300 ease-in-out cursor-pointer">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="py-2 px-6  capitalize font-semibold text-[14px] text-[#F8F8FF] hover:text-[#E9B20C] duration-300 ease-in-out cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-2 px-6 capitalize font-semibold text-[14px] text-[#F8F8FF] hover:text-[#E9B20C] duration-300 ease-in-out cursor-pointer">
              Dashboard
            </li>
          </ul>
          <div className="flex gap-x-2">
            <Link to="/login">
              <button className="flex justify-center items-center leading-none rounded-lg px-8 py-4 border-[0.5px] border-[#DBA514]/30 bg-[rgba(78,78,78,0.24)] backdrop-blur-[18px] text-[#E9B20C] capitalize font-semibold text-[14px] cursor-pointer">
                Login
              </button>
            </Link>
              <button className="flex justify-center items-center leading-none py-4 px-8 capitalize font-semibold text-[14px] rounded-lg bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] backdrop-blur-[6.5px] text-[#0E0E0E] cursor-pointer">
            <Link to="/sign-up">
                Sign up
            </Link>
              </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
