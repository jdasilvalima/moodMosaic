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
        </div>
      </div>

      <GenerateImage @imageGenerated="onImageGenerated" class="displayImage">
        <div v-if="!isShowingImage">
          <QuestionMark/>
        </div>

        <div v-if="isShowingImage" class="displayImage-generated">
          <component :is="selectedComponent" :images="selectedImages" ref="moodMosaicImage"/>
        </div>
      </GenerateImage>

      <DownloadImage :moodMosaicImage="moodMosaicImage" v-if="isShowingImage" class="displayDownloadButton"/>
      
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import DownloadImage from "@/components/DownloadImage.vue";
  import GenerateImage from "@/components/GenerateImage.vue";
  import QuestionMark from "@/components/QuestionMark.vue";

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
  cursor: pointer;
}

@media (min-width: 900px) {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 5px;
    align-items: center;
  }

  .prensentation {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .displayImage {
    grid-column-start: 6;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .displayImage > div > svg {
    width: 100%;
    display: flex;
    margin-top: 3%;
  }

  .displayDownloadButton {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
</style>
