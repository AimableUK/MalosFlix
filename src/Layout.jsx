import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingBg from "../src/img/LandingBg.png";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`font-body text-gray-200 p-3 min-h-screen ${
        isHome
          ? ""
          : "bg-gradient-to-b from-black to-gray-900"
      }`}
      style={isHome ? { backgroundImage: `url(${LandingBg})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
