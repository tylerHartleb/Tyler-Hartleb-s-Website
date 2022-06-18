import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import router from './router';
import smoothscroll from 'smoothscroll-polyfill';


 
// kick off the polyfill!
smoothscroll.polyfill();

const app = createApp(App);

app.use(createPinia());
app.use(router)


app.mount("#app");
