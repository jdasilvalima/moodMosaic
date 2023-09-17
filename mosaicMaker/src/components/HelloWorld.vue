<template>
  <h1>Mosaic Mood</h1>
  <div>
    <p>MoodMosaic create a visual representation of collective emotions through the fusion of randomly selected mood images 🎨. 
      It is combining the different states of mind, from joy and satisfaction to frustration and concern, into a single composite image. 
      In every sprint retrospective, each team member's can express their sentiments and reflections on the just-concluded sprint easily 
      with MoodMosaic.
    </p>
    <button type="button">Generate an Image</button>
  </div>
  <div>
    <div class="generated-image">Image</div>
    <button type="button">Download</button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.generated-image {
  background-color: rgb(225, 225, 225);
  height: 20rem;
  width: 50rem;
}
</style>
