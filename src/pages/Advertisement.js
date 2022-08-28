import React from "react";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Main from "../components/Main";

import "./Advertisement.css";

function Advertisement() {
  return (
    <div className="advertisment">
      <Navbar />
      <div id="ID_INFORMATION">금주의 전단 상품을 만나보세요</div>
      <Menu />
      <Main />
    </div>
  );
}

export default Advertisement;
