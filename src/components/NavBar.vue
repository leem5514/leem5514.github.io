<template>
  <v-app-bar
    flat
    :class="{ 'scrolled': isScrolled }"
    class="navbar"
    height="70"
  >
    <!-- 왼쪽: 아바타 + LMG -->
    <div class="left-container">
      <v-avatar size="64" class="mr-3">
        <v-img src="/src/assets/lmg_avater.jpeg" alt="profile" />
      </v-avatar>
      <span :class="{ 'scrolled-text': isScrolled }" class="logo-text">
        LMG
      </span>
    </div>

    <v-spacer></v-spacer>

    <!-- 우측 메뉴 -->
    <div class="right-container" style="margin-left: 50%;">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.route"
        variant="text"
        :class="{ 'scrolled-text': isScrolled }"
        class="nav-btn"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuItems: [
        { title: "AboutMe", route: "/about" },
        { title: "SkillSet", route: "/skills" },
        { title: "ProJect", route: "/projects" },
        { title: "CV", route: "/cv" },
      ],
      isScrolled: false, // 스크롤 여부 상태
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 스크롤 값이 100px 이상이면 isScrolled를 true로 변경
      this.isScrolled = window.scrollY > 100;
    },
  },
};
</script>

<style scoped>
/* 기본 투명 배경 */
.navbar {
  background-color: rgba(255, 255, 255, 0); /* 완전 투명 */
  padding: 0 40px;
  display: flex;
  align-items: center;
  transition: background-color 0.4s ease;
}

/* 스크롤 100px 이상 시 색상 변경 */
.navbar.scrolled {
  background-color: #f5f5f5; /* 밝은 회색 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */
}

/* 좌측 컨테이너 정렬 */
.left-container {
  display: flex;
  align-items: center;
}

/* LMG 로고 스타일 (기본: 흐린 회색) */
.logo-text {
  font-size: 32px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.2); /* 흐린 회색 + 20% 투명 */
  transition: color 0.3s ease;
}

/* 우측 메뉴 스타일 */
.right-container {
  display: flex;
  gap: 20px;
}

/* 메뉴 버튼 기본 스타일 (스크롤 전: 흐린 회색) */
.nav-btn {
  margin: 20px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.2); /* 흐린 회색 + 20% 투명 */
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* 스크롤 후 LMG, 메뉴 버튼 스타일 */
.scrolled-text {
  color: black !important; /* 진한 검정 */
}

/* 호버 효과 */
.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
</style>
