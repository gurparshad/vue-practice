import './assets/main.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const app = createApp(App)

// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)


app.use(router)

app.mount('#app')
