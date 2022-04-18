/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 12:10:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 12:20:20
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')

