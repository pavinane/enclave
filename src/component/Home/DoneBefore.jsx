import React from "react";
import { ImageDatas } from "../Data/imageData";
import CarouselSlider from "../Common/Carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function DoneBefore() {
  return (
    <div className="bg-[#F9FF79] p-6">
      <div className="w-2/3 m-auto flex gap-10 flex-col">
        <div className="do_content ">
          <h1 className="font-sans font-bold text-2xl">
            What have we done before
          </h1>
          <p className="text-xl text-center">
            We have done projects across different pioneers including B2B and
            Directly to the <br /> consumers
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-6">
            <div className=" w-2/3 rounded-md border  border-black">
              <CarouselSlider imageData={ImageDatas} responsive={responsive} />
            </div>
            <div className=" w-1/3 rounded-md  border  border-black">
              <CarouselSlider imageData={ImageDatas} responsive={responsive} />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className=" w-1/4 rounded-md  border  border-black">
              <CarouselSlider imageData={ImageDatas} responsive={responsive} />
            </div>
            <div className=" w-1/4 rounded-md  border  border-black">
              <CarouselSlider imageData={ImageDatas} responsive={responsive} />
            </div>
            <div className=" w-1/2 rounded-md  border  border-black">
              <CarouselSlider imageData={ImageDatas} responsive={responsive} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoneBefore;
