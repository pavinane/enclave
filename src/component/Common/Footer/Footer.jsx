import React from "react";
import { Link } from "react-router-dom";

const contactData = [
  {
    name: "Mobile",
  },
  {
    name: "Mail",
  },
  {
    name: "Location",
  },
];
const ServiceData = [
  {
    name: "Turnkey",
  },
  {
    name: "Prefab 1",
  },
  {
    name: "prefab 2",
  },
  {
    name: "prefab 3",
  },
  {
    name: "prefab 4",
  },
  {
    name: "prefab 5",
  },
];

const pages = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "AboutUs",
    link: "/about",
  },
  {
    page: "Careers",
    link: "/carres",
  },
  {
    page: "Blogs",
    link: "/blogs",
  },
];

function Footer() {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="w-1/2 m-auto p-4 flex gap-6 flex-col ">
        <div>
          <h1 className="pt-6 font-bold text-2xl font-inter">Spline Craft </h1>
          <p className="text-md font-sans text-gray-500">Prefab industry</p>
        </div>
        <div className="flex flex-row justify-between">
          <ul>
            <p className="text-md font-sans font-bold text-black mb-4">
              Services
            </p>
            {contactData?.map((item) => (
              <li>{item?.name}</li>
            ))}
          </ul>
          <ul>
            {pages?.map((item) => (
              <Link to={item.link}>
                <li>{item?.page}</li>
              </Link>
            ))}
          </ul>
          <ul>
            <p className="text-md font-sans font-bold text-black mb-4">
              Contact
            </p>
            {ServiceData?.map((item) => (
              <li>{item?.name}</li>
            ))}
          </ul>
        </div>
        <div>social</div>
      </div>
    </div>
  );
}

export default Footer;
