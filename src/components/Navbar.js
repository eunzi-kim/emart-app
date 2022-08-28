import React from "react";

import "./Navbar.css";

function Navbar() {
  const back_img = "/images/arrow.png";
  const home_img = "images/home.png";
  const hamburger_img = "/images/hamburger.png";

  return (
    <div className="navbar">
      <div className="nav_left">
        <img className="nav_icon" src={back_img} alt="뒤로가기" />
        <img className="nav_icon" src={home_img} alt="메인화면" />
      </div>
      <div id="ID_NAV_TITLE">금주의 전단광고</div>
      <div className="nav_right">
        <img className="nav_icon" src={hamburger_img} alert="햄버거바" />
      </div>
    </div>
  );
}

export default Navbar;
