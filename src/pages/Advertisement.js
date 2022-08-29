import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Main from "../components/Main";

import "./Advertisement.css";

function Advertisement() {
  const [categoryName, setCategoryName] = useState("");

  // Menu에서 전달받은 카테고리
  const getCategory = (category) => {
    setCategoryName(category);
  };

  return (
    <div className="advertisment">
      <Navbar />
      <div id="ID_INFORMATION">금주의 전단 상품을 만나보세요</div>
      <Menu sendCategory={getCategory} />
      <Main categoryName={categoryName} />
    </div>
  );
}

export default Advertisement;
