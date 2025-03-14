import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`py-5 px-8 bottom-0 ${
        isHome ? "bg-gray-900 text-white" : "bg-transparent"
      }`}
    >
      <p className="mb-7">
        Malos<span className="text-primary">Flix </span> is a movie database app
        that allows you to easily search for movies, view their details, and
        discover new favorites. With a clean and responsive design, you can
        explore movie titles, posters, release dates, and more. Powered by the
        OMDB API, MalosFlix provides all the essential information you need
        about your favorite films, right at your fingertips.
      </p>
      <ul className="flex justify-center flex-row items-center gap-3">
        <li>
          <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/aboutus">About Us</NavLink>{" "}
          <span className="ml-2 text-gray-500">|</span>
        </li>
        <li>
          <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
