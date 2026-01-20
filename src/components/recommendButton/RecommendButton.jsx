// src/components/RecommendButton.js
import React from "react";
import "./RecommendButton.css"; // CSS 파일 import

export default function RecommendButton({ tempList, handleTempList, MENUS }) {
  const handleClick = () => {
    if (typeof handleTempList === "function") {
      const foodRequest = handleTempList();
      console.log("사용자 요청사항:", foodRequest);
    }
    // 랜덤으로 MENUS 에 존재하는 음식들 중 
    // foodRequest 에 있는 category와 situation 에 속하고 
    // disFood 배열의 음식과 겹치지 않는 음식 중
    // 랜덤하게 하나를 고르는 함수 구현
  };

  return (
    <button className="recommend-btn" onClick={handleClick}>
      메뉴 추천받기
    </button>
  );
}
