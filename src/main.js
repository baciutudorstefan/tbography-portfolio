import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'mdb-vue-ui-kit/css/mdb.min.css';

import './assets/style/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
