import React, { useState, useEffect } from "react";

import "./Main.css";

function Main() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // 상품 데이터 받아오기
  const getData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `/dummy/Data${page}.json`, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.response);
        setData(res.data);
      }
    };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      {data.map((val, idx) => (
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
