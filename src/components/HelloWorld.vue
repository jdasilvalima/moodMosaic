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
        <button type="button">Generate an Image</button>
      </div>
    </div>
    <div class="image">
      <div class="generated-image">
        <img src="@/assets/frame/frameNature.svg" alt="Mood Mosaic Frame" width="1000"/>
      </div>
      <button type="button">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
