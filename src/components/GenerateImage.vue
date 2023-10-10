<template>
  <div @click="createMoodMosaicImage()" class="create-image-btn">
    <slot/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

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

  const componentsList = [ NatureFrame, NatureFrame2, NatureFrame3 ];
  const selectedComponent = ref();
  const jsonList = ref<Image[]>([ ...calm, ...succeed, ...team, ...work ]);
  let selectedImages = ref({ calm: "", succeed: "", team: "", work: ""});

  const emit = defineEmits(['imageGenerated']);

  function createMoodMosaicImage(): void {
    selectRandomImages();
    selectRandomFrame();
    emit('imageGenerated', { component: selectedComponent.value,
                              images: selectedImages.value,
                              showImage: true }
    );
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
</script>