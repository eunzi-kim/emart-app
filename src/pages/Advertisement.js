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

  // 위로 가기 버튼
  const onGoUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="advertisment">
      <Navbar />
      <div id="ID_INFORMATION">금주의 전단 상품을 만나보세요</div>
      <Menu sendCategory={getCategory} />
      <Main categoryName={categoryName} />
      <button id="ID_BTN_GO_UP" onClick={onGoUp}>
        ⬆️
      </button>
    </div>
  );
}

export default Advertisement;
