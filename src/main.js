/*imports necessary components and creates App*/
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles_4.css';

createApp(App).use(router).mount('#app');