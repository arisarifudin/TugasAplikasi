import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "datatables.net-bs4";
import "datatables.net-buttons-bs4";

createApp(App).use(router).mount('#app')