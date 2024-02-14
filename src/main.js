import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import SvgSprite from './components/SvgSprite.vue'
import SvgSpriteColor from './components/SvgSpriteColor.vue'

const app = createApp(App)

app.component('MapSvgIcon', SvgIcon)
app.component('MapSvgSprite', SvgSprite)
app.component('MapSvgSpriteColor', SvgSpriteColor)

app.mount('#app')
