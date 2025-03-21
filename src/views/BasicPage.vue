<template>
  <v-app >
    <v-container fluid>
      <v-row align="stretch">
        <!-- 왼쪽 자기소개 섹션 -->
        <v-col cols="8" class="d-flex flex-column justify-center px-10" >
          <v-typography variant="h2" class="text-teal-darken-2 font-weight-bold">Introduction</v-typography>
          
          <v-typography variant="h4" class="font-weight-bold"> 백엔드 개발자</v-typography>
          <v-typography variant="h4" class="font-weight-bold">이명규</v-typography>
          
          <v-typography class="mt-6 text-grey-darken-1">"아는 것 만으로는 충분하지 않다. 적용할 줄 알아야 한다. 의지만 갖고는 충분하지 않다. 행동으로 옮겨야 한다." - 이소룡</v-typography>
          <v-typography class="mt-4 text-grey-darken-1">공부를 하고 나서 거기서 그치지 않고 관련된 기술을 적용해 개발을 해보거나 필요한 프로그램을 개발하는 것을 좋아합니다.</v-typography>
          <v-typography class="mt-2 text-grey-darken-1">백엔드 기술에 관심이 있으며 커뮤니케이션 및 코드 리뷰 하는 것을 좋아합니다.</v-typography>
          <v-typography class="mt-2 text-grey-darken-1">현재 신입 백엔드 개발자로 구직 중입니다.</v-typography>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomePage',
  components: {
    
  },
};
</script>

<style scoped>
/* .cols {
  background-color: blueviolet;
} */
.fill-height {
  
  height: 100vh;
}
</style>

