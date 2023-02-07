import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
const mount = el =>
  ReactDom.render(
		<App />,
		el
	)

if (process.env.NODE_ENV === 'development') {
const devRoot = document.body.querySelector('#m_marketing-dev-root')
	console.log('devRoot ', devRoot)
	devRoot && mount(devRoot)
}

export { mount }
