<template>
    <v-container class="home-container">
      <!-- 메인 텍스트 -->
      <div class="intro-text">
        <p class="subtitle">이명규</p>
  
        <h1 class="title">백 엔드 개발자</h1>
        
        <!-- 상단 하늘색 선 -->
        <div class="line"></div>
  
        <p class="description">
            <strong>끝없는 배움 속에서 길을 찾는 개발자</strong> 이명규입니다.<br>
            "좋은 코드는 단순한 결과물이 아니라, 쌓아 올린 원칙의 총합이다." - 『클린 코드』, 로버트 C. 마틴<br>
            나의 실력을 항상 경계하며 항상 배우려고 노력하는 개발자를 지향합니다.
        </p>
  
        <!-- 하단 하늘색 선 -->
        <div class="line"></div>
      </div>
  
      <!-- 더보기 버튼 -->
      <div class="more-section">
        <span class="more-text">더보기</span>
        <img src="images/underwing.png" alt="아래 화살표" class="down-arrow" />
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  /* 전체 배경 스타일 */
  .home-container {
    background: url("/src/assets/back_img.jpg") no-repeat center center/cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
    position: relative;
    opacity: 0.8;
  }
  
  /* 메인 텍스트 스타일 */
  .intro-text {
    max-width: 900px;
    padding: 20px;
  }
  
  /* 타이틀 스타일 */
  .title {
    font-size: 48px;
    font-weight: 800;
  }
  
  /* 서브 타이틀 */
  .subtitle {
    font-size: 48px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  /* 설명 텍스트 */
  .description {
    font-size: 18px;
    line-height: 1.6;
    margin: 10px 0;
  }
  
  /* 하늘색 구분선 */
  .line {
    width: 20%;
    height: 5px;
    background-color: #3f3f3f; /* 하늘색 */
    margin: 30px auto;
  }
  
  /* 더보기 버튼 스타일 */
  .more-section {
    position: absolute;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInUp 1s ease-in-out;
    transition: transform 0.3s ease, opacity 0.3s ease;
    
  }
  
  /* 더보기 텍스트 */
  .more-text {
    font-size: 16px;
    font-weight: 600;
    color: black;
    margin-bottom: 5px;
  }
  
  /* 아래 화살표 이미지 */
  .down-arrow {
    width: 26px; /* 이미지 크기 */
    height: 28px;
    opacity: 0.6;
    
  }
  
  /* 호버 시 효과 */
  .more-section:hover {
    transform: translateY(5px);
    opacity: 1;
  }
  
  /* 부드러운 애니메이션 */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  