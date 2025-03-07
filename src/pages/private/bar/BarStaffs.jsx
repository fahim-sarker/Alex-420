// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalenderIcon } from "@/assets/icons/icons";
import { ClockIcon } from "lucide-react";

const BarStaffs = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    employeeId: "",
    email: "",
    phone: "",
    shift: "",
    address: "",
    identification: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff data submitted:", formData);
  };

  return (
    <section className="bg-[#F8F8FF] pt-12">
      <section className="px-10 overflow-hidden pb-16">
        <h2 className="text-xl font-semibold mb-6 ">Add Staff</h2>
        <form
          onSubmit={handleSubmit}
          className="p-6 py-10 space-y-8 bg-[#FAFAFA] border border-[#DBA514] rounded-[6px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="name"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Name
              </Label>
              <Input
                id="name"
                className="w-full h-[56px] bg-white"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="designation"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Designation
              </Label>
              <Select
                value={formData.designation}
                onValueChange={(value) => updateFormData("designation", value)}
              >
                <SelectTrigger
                  id="designation"
                  className="w-full h-[56px] bg-white"
                >
                  <SelectValue placeholder="Select designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="supervisor">Supervisor</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="intern">Intern</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="employeeId"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Employee Id
              </Label>
              <Input
                id="employeeId"
                className="w-full h-[56px] bg-white"
                value={formData.employeeId}
                onChange={(e) => updateFormData("employeeId", e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Email
              </Label>
              <Input
                id="email"
                className="w-full h-[56px] bg-white"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="phone"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                className="w-full h-[56px] bg-white"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="shift"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Shift
              </Label>
              <Select
                value={formData.shift}
                onValueChange={(value) => updateFormData("shift", value)}
              >
                <SelectTrigger id="shift" className="w-full h-[56px] bg-white">
                  <SelectValue placeholder="Select shift" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="address"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Address
              </Label>
              <Input
                id="address"
                className="w-full h-[56px] bg-white"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="identification"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Identification
              </Label>
              <Select
                value={formData.identification}
                onValueChange={(value) =>
                  updateFormData("identification", value)
                }
              >
                <SelectTrigger
                  id="identification"
                  className="w-full h-[56px] bg-white"
                >
                  <SelectValue placeholder="Select identification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="drivingLicense">
                    Driving License
                  </SelectItem>
                  <SelectItem value="nationalId">National ID</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="submit"
              className="bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] text-lg font-medium text-black sm:w-auto px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer min-w-[204px]"
            >
              Add Staff
            </button>
          </div>
        </form>
      </section>
      <section className="px-10 overflow-hidden pb-4 pt-8 border-t">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold tracking-[0.6px]">Stuff list</h2>
          <button
            type="button"
            className="text-lg font-medium text-[#0E0E0E] bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] py-3.5 px-7 rounded-[6px] tracking-[0.54px]"
          >
            View all staffs
          </button>
        </div>
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
                <div className="bg-[#fafafa] flex gap-4 text-[#181818] p-[18px] rounded-[6px] w-[450px] border border-[#C8C8C8]">
                  <div className="left shrink-0">
                    <figure className="w-[135px] h-full rounded-[6px] border border-[#C8C8C8] flex justify-center items-center">
                      <img
                        src="https://i.ibb.co.com/fYcPSK0y/profile-2.png"
                        alt=""
                        className="w-fit px-4"
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl font-instrument mb-1 line-clamp-1 tracking-[0.6px]">
                      Cameron Williamson
                    </h3>
                    <h4>Id: #5464</h4>
                    <h4>Designation: Stuff 1</h4>
                    <h4>Email : Email@email.com</h4>
                    <h4>Phone : 0123456789</h4>
                    <h4>Shift : Day</h4>
                    <h4>Address : Address, street, 404</h4>
                    <h4>Driving license : 123456789</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
};

export default BarStaffs;
