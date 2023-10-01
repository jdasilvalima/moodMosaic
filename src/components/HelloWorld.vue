<template>
  <!-- Version Beta -->
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
      </div>
    </div>
    <div class="image">
      <div class="generated-image">
        <component :is="selectedComponent" :images="selectedImages" ref="moodMosaicImage"/>
      </div>
      <button @click="downloadPng()">Download</button>
    </div>
  </div>
  <!-- Version Beta -->
</template>

<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import NatureFrame from "@/components/frame/NatureFrame.vue";
  import NatureFrame2 from "@/components/frame/NatureFrame2.vue";
  import NatureFrame3 from "@/components/frame/NatureFrame3.vue";

  import calm from "@/dataImg/calm.json";
  import succeed from "@/dataImg/succeed.json";
  import team from "@/dataImg/team.json";
  import work from "@/dataImg/work.json";

  type Image = {
    category: string;
    name: string;
    dataUrl: string;
  };

  const componentsList = [NatureFrame, NatureFrame2, NatureFrame3];
  const selectedComponent = ref();
  let selectedImages = ref({ calm: "", succeed: "", team: "", work: ""});
  const moodMosaicImage = ref(null);
  const jsonList = ref<Image[]>([...calm, ...succeed, ...team, ...work]);

  onBeforeMount(() => {
    createMoodMosaicImage();
  });

  function createMoodMosaicImage(): void {
    selectRandomImages();
    selectRandomFrame();
  }

  function getRandomIndex(lengthList: number): number {
    return Math.floor(Math.random() * lengthList);
  }

  function selectRandomImages(): void {
    for (const param in selectedImages.value) {
      const randomIndex = getRandomIndex(2);
      const selectedJson = jsonList.value.filter((json) => json.category === param);
      selectedImages.value[param] = selectedJson[randomIndex]?.dataUrl;
    }
  };

  function selectRandomFrame(): void {
    const randomIndex = getRandomIndex(componentsList.length);
    selectedComponent.value = componentsList[randomIndex];
  };
 
  function downloadPng() {
    const svgData = new XMLSerializer().serializeToString(moodMosaicImage.value?.svgImage!);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const svgImage = new Image();

    svgImage.addEventListener(
      "load",
      () => {
        onLoadImage(svgImage);
      },
      false,
    )

    svgImage.src = svgUrl;
  }

  function onLoadImage(svgImage: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = svgImage.width;
    canvas.height = svgImage.height;

    const canvasCtx = canvas.getContext("2d")!;
    canvasCtx.drawImage(svgImage, 0, 0);

    canvas.toBlob((blob) => {
      const pngUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "image.png";
      downloadLink.click();
      URL.revokeObjectURL(pngUrl);
    }, "image/png");
  }

  function downloadSvg() {
    if (!moodMosaicImage.value) return;

    const data: Node = moodMosaicImage.value?.svgImage;
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(data));
    downloadLink.download = 'mon_svg.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

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
