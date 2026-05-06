<template>
  <div class="flex justify-center mt-2">
    <video
      controls
      autoplay
      muted
      playsinline
      class="max-h-[78vh] rounded-2xl border border-white/15 shadow-2xl"
      :src="videoSrc"
      :poster="posterSrc"
    />
  </div>
</template>

<script setup>
const videoSrc = '/demo.mkv'
const posterSrc = '/demo-poster.png'
</script>
