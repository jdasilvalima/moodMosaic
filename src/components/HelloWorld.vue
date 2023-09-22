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
        <NatureFrame/>
      </div>
      <button type="button">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import NatureFrame from "@/components/frame/NatureFrame.vue";
  //https://dev.to/geowrgetudor/dealing-with-svg-icons-in-vue-vite-an9
  
  const images = [
    { id: "calm", src: require("@/assets/img/calm.png"), x: 1194, y: 150, width: 100, height: 100 },
    { id: "succeed", src: require("@/assets/img/succeed.png"), x: 164, y: 182, width: 100, height: 100 },
    { id: "team", src: require("@/assets/img/team.png"), x: 525, y: 687, width: 100, height: 100 },
    { id: "work", src: require("@/assets/img/work.png"), x: 854, y: 406, width: 100, height: 100 },
  ]
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
