<template>
  <div
    ref="wrapper"
    class="zoomable-wrapper relative inline-block overflow-hidden select-none"
    :class="{ 'cursor-grab': zoom > 1 && !dragging, 'cursor-grabbing': dragging }"
    @wheel.prevent="onWheel"
    @dblclick="reset"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointerleave="onPointerUp"
  >
    <img
      :src="src"
      :alt="alt"
      class="zoomable-img block max-w-full object-contain transition-transform duration-75 will-change-transform pointer-events-none"
      :style="imgStyle"
      draggable="false"
    />

    <!-- Controls -->
    <div class="absolute bottom-1 right-1 flex gap-1 bg-black/55 backdrop-blur rounded-md px-1.5 py-1 text-white/90">
      <button class="zbtn" title="Thu nho" @click.stop="zoomBy(-0.3)">
        <div class="i-carbon:zoom-out text-base" />
      </button>
      <span class="text-[10px] tabular-nums self-center w-9 text-center opacity-80">{{ Math.round(zoom * 100) }}%</span>
      <button class="zbtn" title="Phong to" @click.stop="zoomBy(0.3)">
        <div class="i-carbon:zoom-in text-base" />
      </button>
      <button class="zbtn" title="Khoi phuc" @click.stop="reset">
        <div class="i-carbon:reset text-base" />
      </button>
    </div>

    <div
      v-if="zoom === 1"
      class="absolute top-1 left-1 bg-black/45 rounded px-1.5 py-0.5 text-[9px] text-white/70 pointer-events-none"
    >
      Cuon chuot / nut + de phong to, keo de di chuyen
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 5 },
})

const wrapper = ref(null)
const zoom = ref(1)
const tx = ref(0)
const ty = ref(0)
const dragging = ref(false)
let startX = 0
let startY = 0
let startTx = 0
let startTy = 0

const imgStyle = computed(() => ({
  transform: `translate(${tx.value}px, ${ty.value}px) scale(${zoom.value})`,
  transformOrigin: 'center center',
}))

function clampPan() {
  if (zoom.value <= 1) {
    tx.value = 0
    ty.value = 0
    return
  }
  const el = wrapper.value
  if (!el) return
  const maxX = (el.clientWidth * (zoom.value - 1)) / 2
  const maxY = (el.clientHeight * (zoom.value - 1)) / 2
  tx.value = Math.max(-maxX, Math.min(maxX, tx.value))
  ty.value = Math.max(-maxY, Math.min(maxY, ty.value))
}

function zoomBy(delta) {
  zoom.value = Math.min(props.max, Math.max(props.min, +(zoom.value + delta).toFixed(2)))
  clampPan()
}

function onWheel(e) {
  zoomBy(e.deltaY < 0 ? 0.3 : -0.3)
}

function reset() {
  zoom.value = 1
  tx.value = 0
  ty.value = 0
}

function onPointerDown(e) {
  if (zoom.value <= 1) return
  dragging.value = true
  startX = e.clientX
  startY = e.clientY
  startTx = tx.value
  startTy = ty.value
  wrapper.value?.setPointerCapture?.(e.pointerId)
}

function onPointerMove(e) {
  if (!dragging.value) return
  tx.value = startTx + (e.clientX - startX)
  ty.value = startTy + (e.clientY - startY)
  clampPan()
}

function onPointerUp() {
  dragging.value = false
}
</script>

<style scoped>
.zoomable-img {
  max-height: inherit;
}
.zbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 2px;
  transition: background 0.15s ease;
}
.zbtn:hover {
  background: rgba(255, 255, 255, 0.18);
}
</style>
