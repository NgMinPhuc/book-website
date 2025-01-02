import React from "react";
import "./Head.css";
import Header from "./Header";
import Search from "./Search";
import Navbar from "./Navbar";

const HeaderLayout = ({ CartItem, isAuthenticated }) => {
  return (
    <>
      <Header />
      <Search CartItem={CartItem} />
      <Navbar isAuthenticated={isAuthenticated} />
    </>
  );
};

export default HeaderLayout;
