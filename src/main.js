import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// === Style Global ===
import '@/assets/css/main.css'
import bottomNavigationVue from 'bottom-navigation-vue'
import 'bottom-navigation-vue/dist/style.css'
import '@/assets/css/font-awesome.css'
import '@/assets/js/font-awesome.min.js'

// === PrimeVue v4 ===
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bottomNavigationVue)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'light',
      cssLayer: false
    }
  }
})

app.mount('#app')
