import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import SvgSprite from './components/SvgSprite.vue'
import SvgSpriteColor from './components/SvgSpriteColor.vue'

const app = createApp(App)

app.component('map-svg-icon', SvgIcon)
app.component('map-svg-sprite', SvgSprite)
app.component('map-svg-sprite-color', SvgSpriteColor)

app.mount('#app')
