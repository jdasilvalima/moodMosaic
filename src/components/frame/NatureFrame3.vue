<template>
  <div ref="svgImage">
    <svg width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect width="1512" height="982" fill="white"/>
        <g id="FrameNature">
          <rect id="Rectangle 1" x="57.5" y="57.5" width="1397" height="867" stroke="#282828" stroke-width="3"/>
          <line id="Line 1" x1="369" y1="505.5" x2="1456" y2="505.5" stroke="black"/>
          <path id="Star 1" d="M454 663.69L469.463 713.626L469.572 713.978H469.94H520.044L479.489 744.896L479.211 745.108L479.315 745.441L494.793 795.426L454.303 764.559L454 764.328L453.697 764.559L413.207 795.426L428.685 745.441L428.789 745.108L428.511 744.896L387.956 713.978H438.06H438.428L438.537 713.626L454 663.69Z" stroke="black"/>
        </g>
        <g id="Images">
          <image id="calm" x="1194" y="150" width="100" height="100" :href="images?.calm" />
          <image id="work" x="854" y="406" width="100" height="100" :href="images?.team"/>
          <image id="team" x="525" y="687" width="100" height="100" :href="images?.work"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const svgImage = ref(null);

  defineProps({
    images: Object,
  })

  defineExpose({
    svgImage
  })
</script>