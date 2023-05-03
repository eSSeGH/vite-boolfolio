import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@fontsource/roboto-condensed"
import { router } from './router'

createApp(App).use(router).mount('#app')
