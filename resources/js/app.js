import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import MainLayout from './Layouts/MainLayout.vue'
import { ZiggyVue } from 'ziggy-js'
import '../css/app.css'
import { InertiaProgress } from '@inertiajs/progress'

import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";


InertiaProgress.init({
  delay: 0,
  color: '#29d',
  includeCSS:true,
  showSpinner:true,

})

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || MainLayout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
              
      .use(ZiggyVue)
      .use(Quasar, {
        plugins: {},
        })
      .mount(el)
  },
})