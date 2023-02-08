import { crateApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
const app = createApp(Dashboard)
 app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.body.querySelector('#m_dashboard-dev-root')
  devRoot && mount(devRoot)
}

export { mount }
