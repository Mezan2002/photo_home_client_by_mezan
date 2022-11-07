import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
