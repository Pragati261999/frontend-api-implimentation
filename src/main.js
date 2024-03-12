/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import axios from 'axios' // Update import statement

loadFonts()

// Create Vue app
const app = createApp(App)

// Configure Axios globally
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:3300', // Replace with your API's base URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173', // Replace with your frontend's origin
  },
})

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)

// Mount Vue app
app.mount('#app')
