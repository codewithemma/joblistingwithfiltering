import React from "react";
import headerImg from "../../images/bg-header-desktop.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={headerImg} alt="" className="w-full object-cover" />
    </div>
  );
};

export default Header;
