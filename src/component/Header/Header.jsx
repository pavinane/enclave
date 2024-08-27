import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Our Solution",
    link: "/oursolution",
  },
  {
    name: "Career",
    link: "/career", // Fixed typo here (was "/carrer")
  },
];

function Header() {
  const location = useLocation();

  return (
    <div className="flex justify-between p-4 px-6 items-center">
      <div className="log">
        <h1 className="font-bold text-2xl">Spline Craft</h1>
      </div>
      <div className="menus flex justify-between gap-10 items-center">
        {MenuList?.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <div className="menu_tit" key={item.name}>
              <Link
                to={item.link}
                className={`${
                  isActive ? "text-blue-500" : "text-black"
                } hover:text-blue-500`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
        <button className="bg-[#5D5A88] hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full md:px-6 lg:px-4 text-xs">
          Get a Quote
        </button>
      </div>
    </div>
  );
}

export default Header;
