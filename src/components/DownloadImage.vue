<template>
  <div class="download-container">
    <div class="download-text">
      <hr class="line">
      <span>D O W N L O A D</span>
      <hr class="line">
    </div>
    <div class="download-buttons">
      <button @click="downloadImage('jpeg')" class="round-button">JPEG</button>
      <button @click="downloadImage('png')" class="round-button">PNG</button>
      <button @click="downloadSvg()" class="round-button">SVG</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    moodMosaicImage: Object,
  })

  function downloadImage(format: string) : void {
    const svgData = new XMLSerializer().serializeToString(props.moodMosaicImage.svgImage!);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const svgImage = new Image();

    svgImage.addEventListener(
      "load",
      () => {
        onLoadImage(svgImage, format);
      },
      false,
    )

    svgImage.src = svgUrl;
  }

  function onLoadImage(svgImage: HTMLImageElement, format: string) : void {
    const canvas = document.createElement('canvas');
    canvas.width = svgImage.width;
    canvas.height = svgImage.height;

    const canvasCtx = canvas.getContext("2d")!;
    canvasCtx.drawImage(svgImage, 0, 0);

    canvas.toBlob((blob) => {
      const pngUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `moodMosaic.${format}`;
      downloadLink.click();
      URL.revokeObjectURL(pngUrl);
    }, `image/${format}`);
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

<style>
  .download-container {
    text-align: center;
  }

  .download-text {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  .line {
    flex-grow: 1;
    height: 2px;
    background-color: #333;
    margin: 0 1rem;
  }

  .download-text span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .download-buttons {
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
  }

  .round-button {
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 50%;
    background-color: #00d5d9;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 0 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .round-button:hover {
    background-color: #019a9d;
  }
</style>