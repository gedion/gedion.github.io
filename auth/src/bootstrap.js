import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'
const mount = (el, { onNavigate, defaultHistory, initialPath  } = {}) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath]})
	onNavigate && history.listen(onNavigate)
  ReactDom.render(
		<App history={history}/>,
		el
	)

	return {
		onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location
			if (pathname !== nextPathname) {
				history.push(nextPathname)
			}
		}
	}
}

if (process.env.NODE_ENV === 'development') {
const devRoot = document.body.querySelector('#m_auth-dev-root')
	devRoot && mount(devRoot, { defaultHistory: createBrowserHistory()})
}

export { mount }
