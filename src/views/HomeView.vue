<template>
  <main>
    <div class="container">
      
      <div class="prensentation">
        <div>
          <h1>MoodMosaic</h1>
          <p>
            MoodMosaic allows you to generate an image featuring multiple characters with different mood states. 
            This image can be used during a retrospective meeting to capture everyone's thoughts on the past sprint while also 
            identifying areas for improvement. 
            <br/>
            <br/>
            How to use it ? You can either keep the digital image or print it out and ask each team member to place a marker 
            on the character that best represents their mood during the last sprint. 
            Additionally, each team member can explain why they chose that character, what they liked during the sprint, and what they would like to see improved.
          </p>
          <GenerateImage @imageGenerated="onImageGenerated"/>
        </div>
      </div>

      <div class="displayImage">
        <DisplayImage />
      </div>

      <div class="image" v-if="isShowingImage">
        <div class="generated-image">
          <component :is="selectedComponent" :images="selectedImages" ref="moodMosaicImage"/>
        </div>
        <DownloadImage :moodMosaicImage="moodMosaicImage" />
      </div>
      
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import DownloadImage from "@/components/DownloadImage.vue";
  import GenerateImage from "@/components/GenerateImage.vue";
  import DisplayImage from "@/components/DisplayImage.vue";

  const moodMosaicImage = ref(null);
  const isShowingImage = ref<boolean>(false);
  const selectedComponent = ref();
  let selectedImages = ref({ calm: "", succeed: "", team: "", work: ""});

  function onImageGenerated({ component, images, showImage }) {
    selectedComponent.value = component;
    selectedImages.value = images;
    isShowingImage.value = showImage;
  };
</script>

<style scoped>
.container {

}

.prensentation {
  text-align: justify;
}

.displayImage {
  width: 100%;
}

@media (min-width: 900px) {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 5px;
  }

  .prensentation {
    grid-column-start: 1;
    grid-column-end: 6;
  }

  .displayImage {
    grid-column-start: 6;
    grid-column-end: 13;
    align-self: stretch;
    justify-self: stretch;
  }

  .displayImage > svg {
    width: 100%;
    align-self: stretch;
    justify-self: stretch;
  }
}
</style>
