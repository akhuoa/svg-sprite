import Vue from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import SvgSprite from './components/SvgSprite.vue'
import SvgSpriteColor from './components/SvgSpriteColor.vue'

Vue.component('map-svg-icon', SvgIcon)
Vue.component('map-svg-sprite', SvgSprite)
Vue.component('map-svg-sprite-color', SvgSpriteColor)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
