<template>
  <button @click="downloadPng()">Download PNG format</button>
</template>

<script setup lang="ts">
  const props = defineProps({
    moodMosaicImage: Object,
  })

  function downloadPng() {
    const svgData = new XMLSerializer().serializeToString(props.moodMosaicImage.svgImage!);
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
    if (!props.moodMosaicImage.svgImage) return;

    const data: Node = props.moodMosaicImage.svgImage;
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(data));
    downloadLink.download = 'mon_svg.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
</script>