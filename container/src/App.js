import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import Header from './components/Header'

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma'
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const history = createBrowserHistory()

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard')
		}
	}, [isSignedIn])

  return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
					<Header 
						isSignedIn={isSignedIn} 
						onSignOut={()=> setIsSignedIn(false)}
					/>
				<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/auth">
						<AuthLazy onSignIn={() => setIsSignedIn(true)} />
					</Route>
					<Route path="/dashboard">
		        {!isSignedIn && <Redirect to="/" />}
					  <DashboardLazy />
					</Route>
					<Route path="/" component={MarketingLazy} />

				</Switch>
				</Suspense>
			</Router>
    </StylesProvider>
	)
}
