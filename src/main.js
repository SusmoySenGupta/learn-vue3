import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import store from './store/index'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

createApp(App).use(router).use(store).mount('#app')
