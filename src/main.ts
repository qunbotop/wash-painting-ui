import {createApp} from 'vue';
import App from './App.vue';
import WUI from "../lib";
import {WMessage} from "../lib";
// import WUI from "../dist/wash-painting-ui.es.js";
// import {WMessage} from "../dist/wash-painting-ui.es.js";
import './style.scss'


const app = createApp(App);

app.use(WUI).mount('#app');

app.config.globalProperties.$message = WMessage;
