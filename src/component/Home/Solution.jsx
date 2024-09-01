import React from "react";
// import round from "../../assets/round_1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImageScroller.css";

gsap.registerPlugin(ScrollTrigger);

function Solution() {
  return (
    <div className="pt-4 bg-white">
      <div>
        <h1 className="font-sans font-bold text-3xl text-center">
          Solution we provide
        </h1>
      </div>
      <div className="flex flex-row gap-10  m-auto my-6">
        <div className="w-1/2">
          <div className="w-[400px] bg-[#D9D9D9] rounded-full h-[400px]">
            {/* <ScrollAnimation /> */}
          </div>
        </div>
        <div>
          <h1 className="font-sans font-bold text-xl text-center">
            Turnkey Projects
          </h1>
          <p>
            {" "}
            We have done projects across different pioneers including B2B and
            Directly to the consumers
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
