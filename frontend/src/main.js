import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router/index"
import "./assets/main.css"
import HeaderButton from "./components/headbutton.vue";


createApp(App).use(router).component("HeaderButton", HeaderButton).mount('#app')
