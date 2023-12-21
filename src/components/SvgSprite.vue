<!-- SvgSprite.vue -->

<template>
  <svg width="0" height="0" style="display: none;" v-html="$options.svgSprite" />
</template>

<script>
const removingTags = ['title', 'desc', 'defs', 'style']
const removingTagAttrs = ['width', 'height', 'fill'] // Removes attributes from inside the svg tag. Removes width and height by default.
const svgContext = import.meta.glob("@/../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});
const removeTagsAndAttrs = (content) => {
  let tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  // Removes specified tags and its children. Specify tags by setting removingTags array.
  removingTags.map((tag) => {
    const htmlTag = tempElement.querySelector(tag)
    if (htmlTag) htmlTag.remove()
  })
  const svg = tempElement.querySelector("svg")
  removingTagAttrs.map((attr) => {
    svg.removeAttribute(attr)
  })
  const removed = tempElement.innerHTML
  tempElement.remove()
  return removed
}
const cleanUp = (content) => {
  const regexSequences = [
    // Remove XML stuffs and comments
    [/<\?xml[\s\S]*?>/gi, ""],
    [/<!doctype[\s\S]*?>/gi, ""],
    [/<!--.*-->/gi, ""],

    // SVG XML -> HTML5
    [/\<([A-Za-z]+)([^\>]*)\/\>/g, "<$1$2></$1>"], // convert self-closing XML SVG nodes to explicitly closed HTML5 SVG nodes
    [/\s+/g, " "], // replace whitespace sequences with a single space
    [/\> \</g, "><"], // remove whitespace between tags
  ]
  const cleanedUp = regexSequences.reduce((prev, regex) => {
    return "".replace.apply(prev, regex)
  }, content).trim()
  return cleanedUp
}
const symbols = Object.keys(svgContext).map((path) => {
  // get SVG file content
  const content = removeTagsAndAttrs(svgContext[path])
  // extract icon id from filename
  const id = path.replace(/^.+\/(\w+).svg$/, "$1")
  // replace svg tags with symbol tags and id attribute
  return cleanUp(content).replace('<svg', `<symbol id="${id}"`).replace('svg>', 'symbol>')
});
export default {
  name: 'MapSvgSprite',
  svgContext: svgContext,
  svgSprite: symbols.join('\n'), // concatenate all symbols into $options.svgSprite
}
</script>