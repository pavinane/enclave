import React from "react";

import CarouselSlider from "../Common/Carousel";
import arrow from "../../assets/Arrow.png";
import mirror from "../../assets/mirror.png";
import DoneBefore from "./DoneBefore";
import { ImageDatas } from "../Data/imageData";
import ContactUs from "./ContactUs";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <section className="bg-[#D9D9D9] mb-6 flex  flex-col">
      <div className="bg-white ">
        <div className=" text-3xl text-red-500 underline">
          <div className="my-8 px-4 ">
            <CarouselSlider
              imageData={ImageDatas}
              responsive={responsive}
              className="mr-3"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 mb-10">
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
      </div>
      <div className="mt-10 ">
        <div className="flex justify-center items-center bg-white flex-col gap-4">
          <h1 className="pt-10 font-bold text-2xl font-inter text-center">
            Getting a quick and great quality prefab <br /> furniture's are hard
            but we made it <br /> Easier
          </h1>
          <div className="grid grid-cols-2 gap-8 justify-items-end">
            <div className="img_crd h-[600px]">
              <img src={mirror} alt="img1" className="w-fit h-full" />
            </div>
            <div className="img_para  justify-self-center ">
              <p className="text-center py-12  text-base w-3/4 ">
                Welcome to V.R. Furniture Company where we are the Modular
                Office, Residential, Kitchen, and Bedroom Furniture
                manufacturers and suppliers in Ahmedabad. We are the
                Manufacturers and Suppliers of School and College Furniture,
                Hospital & Clinic Furniture, Office Tables, Designer Sofa Set,
                and Reception Desk along with Compactor Storage and Office
                Workstation Manufacturers in Ahmedabad. Get in touch with us
                today for any of your Modular Furniture needs regarding Hotel,
                Restaurant, or cafe. We are also the Modern Modular Chair,
                Table, and Desks manufacturers and suppliers. V.R. Furniture
                Company is the leading Turnkey projects Executors and Interior
                Infra Projects Executor in Ahmedabad. V.R. Furniture Company has
                been exhibiting an unparalleled passion, modernity and
                innovation in the arena of modular furniture solutions since
                2009. It has been more than a decade we are in the business,
                serving clients at various scales. From apartment owners to
                corporate entrepreneurs to public entities, we are known as a
                top service provider to a broad spectrum of clients across
                India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DoneBefore />
      <ContactUs />
    </section>
  );
}

export default Home;
