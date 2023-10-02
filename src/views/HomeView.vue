<template>
  <main>
    <div class="container">
      <div class="prensentation">
        <h1>Mood Mosaic</h1>
        <div>
          <p>MoodMosaic create a visual representation of collective emotions through the fusion of randomly selected mood images 🎨. 
            It is combining the different states of mind, from joy and satisfaction to frustration and concern, into a single composite image. 
            In every sprint retrospective, each team member's can express their sentiments and reflections on the just-concluded sprint easily 
            with MoodMosaic.
          </p>
          <GenerateImage @imageGenerated="onImageGenerated"/>
        </div>
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
  .prensentation {
    text-align: justify;
  }

  h1 {
    font-family: 'Gerlick', sans-serif;
    font-size: 7rem;
  }

  .generated-image {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

</style>
