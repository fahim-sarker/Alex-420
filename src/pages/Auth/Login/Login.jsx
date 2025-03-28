import Container from "@/Shared/Container";
import React, { useState } from "react";
import Signupbg from "../../assets/images/Signup/signupmainbg.png";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-[#000]  h-screen flex items-center">
      <Container className="py-[60px] rounded-[6px] font-poppins w-full">
        <div className="flex gap-x-20 justify-between">
          <div className="w-[40%]">
            <h3 className="text-[30px] text-[#FFF] font-normal font-instrument">
              Login for <span className="text-[#EEB609]">OrderUp</span>
            </h3>
            <form action="">
              <div className="flex flex-col gap-5 mt-5">
                <div className="">
                  <h5 className="text-[14px] text-[#F8F8FF] font-medium pb-[6px]">
                    Email*
                  </h5>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="py-[10px] px-[14px] outline-none border border-[#DBA514]/30 rounded-[8px]  bg-[#232323] text-[#7A7A7A] text-[14px] font-normal w-full"
                  />
                </div>
                <div className="relative">
                  <h5 className="text-[14px] text-[#F8F8FF] font-medium pb-[6px]">
                    Password*
                  </h5>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="py-[10px] px-[14px] outline-none border border-[#DBA514]/30 rounded-[8px]  bg-[#232323] text-[#7A7A7A] text-[14px] font-normal w-full"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-10 right-5 cursor-pointer"
                  >
                    {showPassword ?<IoEyeSharp  className="text-white"/> : <FaEyeSlash className="text-white"/> }
                  </div>
                </div>
              </div>
            </form>
            <button className="flex justify-center items-center leading-none py-[16px] px-[32px] capitalize font-semibold text-[16 px] rounded-lg bg-[linear-gradient(92deg,_#DBA514_2.3%,_#EEB609_35.25%,_#C69320_66.76%,_#FCC201_97.79%)] backdrop-blur-[6.5px] text-[#0E0E0E] cursor-pointer tracking-[0.72px] w-full mt-10">
              Login
            </button>
            <p className="text-[16px] text-[#F8F8FF] font-normal font-popins text-center pt-4">
              You don’t Have an account? Create Account. {" "}
              <span className="text-[#EEB609] underline"><Link to='/sign-up'>signup</Link></span>
            </p>
          </div>
          <div className="">
            <img src={Signupbg} alt="Signupbg" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
