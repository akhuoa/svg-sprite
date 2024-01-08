import MapSvgIcon from './SvgIcon.vue'
import MapSvgSprite from './SvgSprite.vue'
import MapSvgSpriteColor from './SvgSpriteColor.vue'

export default {
  install: (app, options) => {
    app.component('MapSvgIcon', MapSvgIcon)
    app.component('MapSvgSprite', MapSvgSprite)
    app.component('MapSvgSpriteColor', MapSvgSpriteColor)
  }
};
