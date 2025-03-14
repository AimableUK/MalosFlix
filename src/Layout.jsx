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
      className={`font-body text-gray-200 min-h-screen ${
        isHome
          ? ""
          : "bg-gradient-to-b from-black to-gray-900"
      }`}
      style={isHome ? { backgroundImage: `url(${LandingBg})`, backgroundSize: "cover", backgroundPosition: "center", height:'100vh'} : {}}
    >
      {isHome && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}

      <div className="relative z-10 text-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;