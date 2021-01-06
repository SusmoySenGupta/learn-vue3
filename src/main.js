import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import store from './store/index'



createApp(App).use(router).use(store).mount('#app')
