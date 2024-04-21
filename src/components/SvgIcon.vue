<!-- SvgIcon.vue -->
<script setup name="MapSvgIcon">
const props = defineProps({
  /**
   * The svg icon to show.
   */
  icon: {
    type: String,
    required: true,
  },
  /**
   * The option to spin the icon.
   */
  spin: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg class="map-icon" :class="{ 'map-icon-spin': spin }">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<style scoped>
svg.map-icon {
  fill: currentColor;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  width: 1em;
}

svg.map-icon-spin {
  animation: icon-spin 2s infinite linear;
}

@keyframes abi-icon-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}</style>