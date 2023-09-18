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
      <div class="generated-image">Image</div>
      <button type="button">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
  font-family: 'Gerlick', sans-serif;
  font-size: 7rem;
}

.container {  display: grid;
  grid-template-columns: 1fr 1.1fr 0.9fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "Prensentation Prensentation Prensentation . ."
    "Prensentation Prensentation Prensentation . ."
    ". Image Image Image Image"
    ". Image Image Image Image"
    ". Image Image Image Image";
}

.prensentation { 
  grid-area: Prensentation;
  text-align: justify;
}

.image { 
  grid-area: Image; 
}


.generated-image {
  background-color: rgb(225, 225, 225);
}
</style>
