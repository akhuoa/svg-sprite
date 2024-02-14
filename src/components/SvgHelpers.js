export const removeTagsAndAttrs = (content, removeTags, removeSVGTagAttrs, removingTagAttrs) => {
    // removeTags: boolean
    const removingTags = ['title', 'desc', 'defs', 'style']
    // removeSVGTagAttrs: boolean
    const hasNoWidthHeight = ['width', 'height'] // Removes width and height attributes from <svg />.
    // removingTagAttrs: array
    const hasNoAttributes = removingTagAttrs || [] // Removes attributes from inside the <svg />.

    let tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = content;
    // Removes specified tags and its children. Specify tags by modifying removingTags array.
    if (removeTags) {
        removingTags.map((tag) => {
            const htmlTag = tempDivElement.querySelector(tag)
            if (htmlTag) htmlTag.remove()
        })
    }
    if (removeSVGTagAttrs) {
        hasNoWidthHeight.map((attr) => {
            tempDivElement.querySelector("svg").removeAttribute(attr)
        })
    }
    if (removingTagAttrs) {
        hasNoAttributes.map((attr) => {
            const tagAttrsElements = Object.values(tempDivElement.querySelectorAll(`[${attr}]`))
            tagAttrsElements.map((element) => {
                element.removeAttribute(attr)
            })
        })
    }
    const processedHtml = tempDivElement.innerHTML
    tempDivElement = null
    return processedHtml
}

export const cleanUpSvgContext = (content) => {
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
    const cleanedContext = regexSequences.reduce((prev, regex) => {
        return "".replace.apply(prev, regex)
    }, content).trim()
    return cleanedContext
}