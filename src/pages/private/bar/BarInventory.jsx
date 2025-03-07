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

const BarInventory = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productId: "",
    date: undefined,
    hours: "7",
    minutes: "00",
    ampm: "AM",
    assignedBy: "",
    category: "",
    shelfNumber: "",
    price: "",
    sellingPrice: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeString = `${formData.hours}:${formData.minutes} ${formData.ampm}`;
    const dateString = formData.date
      ? format(formData.date, "PPP")
      : "Not selected";
    const formattedData = { ...formData, date: dateString, time: timeString };
    console.log("Form Data:", formattedData);
  };

  return (
    <section className="bg-[#F8F8FF] pt-12">
      <section className="px-10 overflow-hidden pb-16">
        <h2 className="text-xl font-semibold mb-6 ">Add product</h2>
        <form
          onSubmit={handleSubmit}
          className="p-6 py-10 space-y-8 bg-[#FAFAFA] border border-[#DBA514] rounded-[6px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="product-name"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Product Name
              </Label>
              <Input
                id="product-name"
                className="w-full h-[56px] bg-white"
                value={formData.productName}
                onChange={(e) => updateFormData("productName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="product-id"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Product ID
              </Label>
              <Input
                id="product-id"
                className="w-full h-[56px] bg-white"
                value={formData.productId}
                onChange={(e) => updateFormData("productId", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="date"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal h-[56px]"
                    id="date"
                    type="button"
                  >
                    {formData.date
                      ? format(formData.date, "PPP")
                      : "Select date"}
                    <CalenderIcon className="size-6" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  side="bottom"
                  align="end"
                >
                  <CalendarComponent
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => updateFormData("date", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label
                htmlFor="hours"
                className="block font-medium text-[#353B48] md:text-base"
              >
                <span className="mb-2 block">Time</span>
                <div className="flex justify-between items-center h-[56px] bg-white rounded-md px-3 border border-input">
                  <div className="flex gap-2 items-center">
                    <Input
                      id="hours"
                      value={formData.hours}
                      onChange={(e) => updateFormData("hours", e.target.value)}
                      className="w-16 bg-[#F8F8FF] rounded-[6px]"
                      maxLength={2}
                    />
                    <Input
                      id="minutes"
                      value={formData.minutes}
                      onChange={(e) =>
                        updateFormData("minutes", e.target.value)
                      }
                      className="w-16 bg-[#F8F8FF] rounded-[6px]"
                      maxLength={2}
                    />
                    <Select
                      value={formData.ampm}
                      onValueChange={(value) => updateFormData("ampm", value)}
                    >
                      <SelectTrigger
                        className="w-20 bg-[#F8F8FF] rounded-[6px]"
                        iconClass="size-4"
                      >
                        <SelectValue placeholder="AM/PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PM">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <ClockIcon className="size-6 text-[#4E4E4E] opacity-90" />
                </div>
              </Label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label
                htmlFor="assigned-by"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Assigned by
              </Label>
              <Select
                value={formData.assignedBy}
                onValueChange={(value) => updateFormData("assignedBy", value)}
              >
                <SelectTrigger
                  id="assigned-by"
                  className="w-full h-[56px] bg-white"
                >
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="alex">Alex Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="categories"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Categories
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => updateFormData("category", value)}
              >
                <SelectTrigger
                  id="categories"
                  className="w-full h-[56px] bg-white"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <Label
                htmlFor="shelf-number"
                className="block mb-2 font-medium text-[#353B48] md:text-base"
              >
                Shelf Number
              </Label>
              <Select
                value={formData.shelfNumber}
                onValueChange={(value) => updateFormData("shelfNumber", value)}
              >
                <SelectTrigger className="w-full h-[56px] bg-white">
                  <SelectValue placeholder="Select shelf" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a1">A1</SelectItem>
                  <SelectItem value="a2">A2</SelectItem>
                  <SelectItem value="b1">B1</SelectItem>
                  <SelectItem value="b2">B2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="price" className="block mb-2 font-medium text-[#353B48] md:text-base">
                Price
              </Label>
              <Input
                id="price"
                className="w-full h-[56px] bg-white"
                value={formData.price}
                onChange={(e) => updateFormData("price", e.target.value)}
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <Label htmlFor="selling-price" className="block mb-2 font-medium text-[#353B48] md:text-base">
                Selling Price
              </Label>
              <Input
                id="selling-price"
                className="w-full h-[56px] bg-white"
                value={formData.sellingPrice}
                onChange={(e) => updateFormData("sellingPrice", e.target.value)}
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              type="button"
              className="bg-[#1F1F1F] text-lg font-medium text-white w-full sm:w-auto px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer"
              onClick={() => console.log("Generate QR code")}
            >
              Generate QR code
            </button>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                type="button"
                className="bg-[#1F1F1F] text-lg font-medium text-white w-full sm:w-auto px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer"
                onClick={() => console.log("Add receipt")}
              >
                Add receipt
              </button>
              <button
                type="submit"
                className="bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] text-lg font-medium text-black w-full sm:w-auto px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="px-10 overflow-hidden pb-4 pt-8 border-t">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Recently added</h2>
          <button
            type="button"
            className="text-lg font-medium text-[#0E0E0E] bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] py-3.5 px-7 rounded-[6px]"
          >
            View all products
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
                        src="https://i.ibb.co.com/84S5d37z/bottole.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="right text-sm grow">
                    <h3 className="text-xl font-instrument mb-1 line-clamp-1 tracking-[0.6px]">
                      Mouton Cadet Bordeaux Rouge
                    </h3>
                    <h4>Id: #5464</h4>
                    <h4>Table: 02</h4>
                    <h4>Date : 12/12/2024</h4>
                    <h4>Time : 8.00 PM</h4>
                    <h4>Assigned by : Jack toole</h4>
                    <h4>Categories : Wine</h4>
                    <h4>Shelf Number : 3</h4>
                    <h4 className="mb-3">Quantity : 02</h4>
                    <h3 className="text-xl font-semibold">$100.99</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
};

export default BarInventory;
