
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


// import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';

// // localhost:5174/yourActiveRule2
// registerMicroApps([
//   {
//     name: 'vue2',
//     entry: { scripts: ['//localhost:5173/'] },
//     container: '#app1',
//     activeRule: '/yourActiveRule2',
//     props:{
//       router,
//     }
//   },
// ]);

// start();





const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(createPinia())
app.use(router)
// app.use(ElementPlus)

app.mount('#app')
