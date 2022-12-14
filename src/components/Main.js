import React, { useState, useEffect } from "react";

import "./Main.css";

function Main({ categoryName }) {
  const [info, setInfo] = useState({ allData: [], categoryData: [], data: [] });
  const [page, setPage] = useState(1);

  // 상품 데이터 받아오기
  const getData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/dummy/Data.json", true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.response);
        setInfo({
          allData: res.data,
          categoryData: res.data,
          data: res.data.slice(0, 10),
        });
      }
      // 에러
      else {
        let error_msg =
          "code : " + xhr.status + "\n" + "message : " + xhr.responseText;
        alert(error_msg);
      }
    };
  };

  useEffect(() => {
    getData();
  }, []);

  // 10개씩 리스트 추가
  const addData = () => {
    if (page * 10 < info.categoryData.length) {
      let newData = info.categoryData.slice(0, (page + 1) * 10);
      // 무한스크롤 느낄 수 있도록 시간 지연
      setTimeout(() => setInfo({ ...info, data: newData }), 100);
      setPage(page + 1);
    }
  };

  // 스크롤 이벤트 (무한스크롤)
  const onScroll = (e) => {
    const scrollHeight = e.target.scrollingElement.scrollHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    const clientHeight = e.target.scrollingElement.clientHeight;
    if (scrollHeight <= scrollTop + clientHeight) {
      addData();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  // 카테고리 변경되면 리스트 변경
  useEffect(() => {
    window.scrollTo(0, 0);
    let tempData = info.allData.filter((x) => x.category === categoryName);
    // 카테고리가 전체인 경우, 전체 데이터 넣기
    if (categoryName === "전체") {
      tempData = info.allData;
    }
    setInfo({
      ...info,
      categoryData: tempData,
      data: tempData.slice(0, 10),
    });
    setPage(1);
  }, [categoryName]);

  return (
    <div className="main">
      {info.data.map((val, idx) => (
        <div key={idx} className="list">
          <img src={val.image} alt="상품 이미지" className="goods-img" />

          <div className="main-right">
            <div className="price">
              <span className="origin-price">{val.originPrice}</span>
              <span className="bargain-prcie">{val.bargainPrice}</span>
            </div>

            <div>{val.name}</div>

            <div className="tags">
              <div className="tag">
                {val.blueTag.map((v, i) => (
                  <div key={i} className="blue-tag">
                    {v}
                  </div>
                ))}
              </div>
              <div className="tag">
                {val.redTag.map((v, i) => (
                  <div key={i} className="red-tag">
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div className="goods-bottom">
              <div>
                <span className="emoji">📝</span>
                {val.memoCount}
              </div>
              <div>
                <span className="emoji">💬</span>
                {val.commentCount}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
