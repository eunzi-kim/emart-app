import React, { useState, useEffect } from "react";

import "./Menu.css";

function Menu() {
  const up_img = "/images/up.png";
  const down_img = "/images/down.png";

  const [cate, setCate] = useState([]);
  const [activce, setActive] = useState("전체");

  // 메뉴 카테고리 데이터 받아오기
  const getCategory = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/dummy/Category.json", true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.response);
        let categoryArr = ["전체"];
        categoryArr.push(...res.category);
        setCate(categoryArr);
      }
    };
  };

  useEffect(() => {
    getCategory();
  }, []);

  // 메뉴 자세히 보기
  const onClickDown = () => {
    document.querySelector(".menu-detail").classList.remove("none");
    document.querySelector(".menu-basic").classList.add("none");
  };

  // 메뉴 한 줄로 보기
  const onClickUp = () => {
    document.querySelector(".menu-basic").classList.remove("none");
    document.querySelector(".menu-detail").classList.add("none");
  };

  // 카테고리 선택
  const onSelectCategory = (i) => {
    setActive(i);
  };

  return (
    <div className="menu">
      <div className="menu-basic">
        <div className="menu-bar">
          {cate.map((val, idx) => (
            <div key={idx} className="cate-box">
              {activce === val ? (
                <div
                  className="category active-category"
                  onClick={() => onSelectCategory(val)}
                >
                  {val}
                </div>
              ) : (
                <div className="category" onClick={() => onSelectCategory(val)}>
                  {val}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="menu-arrow" onClick={onClickDown}>
          <img id="ID_BTN_DOWN" src={down_img} alt="down" />
        </div>
      </div>

      <div className="menu-detail none">
        <div className="menu-top">
          <div className="menu-title">전체메뉴</div>
          <div className="menu-arrow" onClick={onClickUp}>
            <img id="ID_BTN_UP" src={up_img} alt="up" />
          </div>
        </div>
        <hr id="ID_HR_MENU" />
        <div className="menu-categories">
          {cate.map((val, idx) => (
            <div key={idx} className="detail-cate-box">
              <div className="detail-category">{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
