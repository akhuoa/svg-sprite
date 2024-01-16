<!-- SvgSprite.vue -->

<template>
  <svg width="0" height="0" style="display: none;" v-html="$options.svgSprite"></svg>
</template>

<script>
import { removeTagsAndAttrs, cleanUpSvgContext } from './SvgHelpers.js'

const removeTags = true
const removeSVGTagAttrs = true
const removingTagAttrs = ['fill'] // Removes attributes from inside the svg tag. Removes width and height by default.
const svgContext = import.meta.glob("@/../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});
const symbols = Object.keys(svgContext).map((path) => {
  // get SVG file content
  const content = removeTagsAndAttrs(svgContext[path], removeTags, removeSVGTagAttrs, removingTagAttrs)
  // extract icon id from filename
  const id = path.replace(/^.+\/(\w+).svg$/, "$1")
  // replace svg tags with symbol tags and id attribute
  return cleanUpSvgContext(content).replace('<svg', `<symbol id="${id}"`).replace('svg>', 'symbol>')
});
export default {
  name: 'MapSvgSprite',
  svgContext: svgContext,
  svgSprite: symbols.join('\n'), // concatenate all symbols into $options.svgSprite
}
</script>