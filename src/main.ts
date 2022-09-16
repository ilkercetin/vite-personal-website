/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import VueWriter from 'vue-writer';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import 'quasar/src/css/index.sass';
import './css/style.scss';
import './style.css';
import App from './App.vue';

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .use(VueWriter)
  .mount('#app');
