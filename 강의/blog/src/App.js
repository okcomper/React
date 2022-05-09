/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let posts = "강남 우동 맛집";

  // 글제목 에는 IZONE복귀가 담기고 글제목변경 에는 변수를 수정가능한 값이 담김
  let [글제목, 글제목변경] = useState(["IZONE", "조유리", "권은비"]);
  let [블로그제목, 블로그제목변경] = useState(["Hellcipe"]);
  let [따봉, 따봉변경] = useState(0);
  let [제목, 제목변경] = useState(["WIZONE", "IZONE", "12"]);

  function 제목바꾸기() {
    var newArray = [... 글제목];
    newArray[0] = "WIZONE";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>{블로그제목}</div>
      </div>
      <div className="list">
        <h3>
          {" "}
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p> 2월 17일 발행</p>
        <button onClick={제목바꾸기}>버튼</button>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]}</h3>
        <p> 2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]}</h3>
        <p> 2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
