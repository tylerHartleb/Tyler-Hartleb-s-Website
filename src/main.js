import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import router from './router';
import smoothscroll from 'smoothscroll-polyfill';

import Amplify from 'aws-amplify';  
import '@aws-amplify/ui-vue';  
import aws_exports from './aws-exports';  

Amplify.configure(aws_exports);  

Vue.config.productionTip = false;

smoothscroll.polyfill();

const app = createApp(App);

app.use(createPinia());
app.use(router)


app.mount("#app");
