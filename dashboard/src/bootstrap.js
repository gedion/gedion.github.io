import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = el => createApp(Dashboard).mount(el)

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')
  devRoot && mount(devRoot)
}

export { mount }
