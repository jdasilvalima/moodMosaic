<template>
  <div>
    <svg ref="svgImage" width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect width="1512" height="982" fill="white"/>
        <g id="FrameNature">
          <rect id="Rectangle 1" x="57.5" y="57.5" width="1397" height="867" stroke="#282828" stroke-width="3"/>
          <line id="Line 1" x1="369" y1="505.5" x2="1456" y2="505.5" stroke="black"/>
          <path id="Polygon 1" d="M59.9349 505.75L214 282.879L368.065 505.75H59.9349Z" stroke="black"/>
          <path id="Ellipse 1" d="M1329.5 200.5C1329.5 245.21 1291.25 281.5 1244 281.5C1196.75 281.5 1158.5 245.21 1158.5 200.5C1158.5 155.79 1196.75 119.5 1244 119.5C1291.25 119.5 1329.5 155.79 1329.5 200.5Z" stroke="black"/>
          <path id="Star 1" d="M454 663.69L469.463 713.626L469.572 713.978H469.94H520.044L479.489 744.896L479.211 745.108L479.315 745.441L494.793 795.426L454.303 764.559L454 764.328L453.697 764.559L413.207 795.426L428.685 745.441L428.789 745.108L428.511 744.896L387.956 713.978H438.06H438.428L438.537 713.626L454 663.69Z" stroke="black"/>
        </g>
        <g id="Images">
          <image id="calm" x="1194" y="150" width="100" height="100" :href="images?.calm" />
          <image id="succeed" x="164" y="182" width="100" height="100" :href="images?.succeed"/>
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