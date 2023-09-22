<template>
  <div class="container">
    <div class="prensentation">
      <h1>Mosaic Mood</h1>
      <div>
        <p>MoodMosaic create a visual representation of collective emotions through the fusion of randomly selected mood images 🎨. 
          It is combining the different states of mind, from joy and satisfaction to frustration and concern, into a single composite image. 
          In every sprint retrospective, each team member's can express their sentiments and reflections on the just-concluded sprint easily 
          with MoodMosaic.
        </p>
        <button @click="createMoodMosaicImage()">Generate an Image</button>
        <p>{{ selectedComponent.__name }}</p>
      </div>
    </div>
    <div class="image">
      <div class="generated-image">
        <component :is="selectedComponent" />
      </div>
      <button>Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import NatureFrame from "@/components/frame/NatureFrame.vue";
  import NatureFrame1 from "@/components/frame/NatureFrame3.vue";
  import NatureFrame2 from "@/components/frame/NatureFrame2.vue";

  const componentsList = [NatureFrame, NatureFrame1, NatureFrame2];
  const selectedComponent = ref();

  onBeforeMount(() => {
    createMoodMosaicImage();
  });

  function createMoodMosaicImage() {
    //selectRandomImages();
    selectRandomFrame();
  }

  function selectRandomImages() {
    // TODO
  };

  function selectRandomFrame() {
    const randomIndex = Math.floor(Math.random() * componentsList.length);
    selectedComponent.value = componentsList[randomIndex];
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
