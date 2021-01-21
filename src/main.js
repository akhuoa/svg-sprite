import Vue from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import SvgSprite from './components/SvgSprite.vue'

Vue.component('svg-icon', SvgIcon)
Vue.component('svg-sprite', SvgSprite)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
