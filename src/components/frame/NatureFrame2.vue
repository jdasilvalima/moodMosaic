<template>
  <div>
    <svg width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect width="1512" height="982" fill="white"/>
        <g id="FrameNature">
          <rect id="Rectangle 1" x="57.5" y="57.5" width="1397" height="867" stroke="#282828" stroke-width="3"/>
          <line id="Line 1" x1="369" y1="505.5" x2="1456" y2="505.5" stroke="black"/>
          <path id="Polygon 1" d="M59.9349 505.75L214 282.879L368.065 505.75H59.9349Z" stroke="black"/>
          <path id="Ellipse 1" d="M1329.5 200.5C1329.5 245.21 1291.25 281.5 1244 281.5C1196.75 281.5 1158.5 245.21 1158.5 200.5C1158.5 155.79 1196.75 119.5 1244 119.5C1291.25 119.5 1329.5 155.79 1329.5 200.5Z" stroke="black"/>
        </g>
        <g id="Images">
          <image id="calm" x="1194" y="150" width="100" height="100" :href="myCalmImage" />
          <image id="succeed" x="164" y="182" width="100" height="100" :href="mySucceedImage"/>
          <image id="work" x="854" y="406" width="100" height="100" :href="myTeamImage"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
  import { ref }  from 'vue';

  const myCalmImage = ref<string>("https://github.com/jdasilvalima/moodMosaic/raw/main/img/calm/1.png");
  const mySucceedImage = ref<string>("https://github.com/jdasilvalima/moodMosaic/raw/main/img/succeed/2.png");
  const myTeamImage = ref<string>("https://github.com/jdasilvalima/moodMosaic/raw/main/img/work/1.png");
  const myWorkImage = ref<string>("https://github.com/jdasilvalima/moodMosaic/raw/main/img/team/2.png");
</script>