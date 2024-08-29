import React from "react";

import casros1 from "../../assets/caros1.png";
import casros2 from "../../assets/caros2.png";
import CarouselSlider from "../Common/Carousel";
import arrow from "../../assets/Arrow.png";

const ImageDatas = [
  {
    img: casros1,
  },
  {
    img: casros2,
  },
  {
    img: casros1,
  },
  {
    img: casros2,
  },
];

function Home() {
  return (
    <section>
      <div className=" text-3xl text-red-500 underline">
        <div className="my-8 px-4 ">
          <CarouselSlider imageData={ImageDatas} />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-3xl font-bold font-inter">
          Get Custom Prefab Furniture's{" "}
        </h1>
        <h3 className="text-2xl font-medium font-inter">
          U Desire we build it{" "}
        </h3>
        <p className="text-[1rem] font-medium font-inter">
          we do offer out solutions for both Business projects and customer
          projects
        </p>

        <button
          className="bg-[#F9FF79] hover:bg-yellow-400-700 text-black font-medium py-2
         px-6 rounded-lg w-36 text-[1rem] flex items-center justify-between
         md:px-6 
         lg:px-6"
        >
          Reach Us
          <span>
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Home;
