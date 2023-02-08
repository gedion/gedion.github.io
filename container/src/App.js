import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma'
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))


export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false)

  return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
			<Header 
		    isSignedIn={isSignedIn} 
    		onSignOut={()=> setIsSignedIn(false)}
		  />
		<Suspense fallback={<div>Loading...</div>}>
		<Switch>
		  <Route path="/auth">
        <AuthLazy onSignIn={() => setIsSignedIn(true)} />
		  </Route>
		  <Route path="/" component={MarketingLazy} />
		</Switch>
		</Suspense>
			</BrowserRouter>
    </StylesProvider>
	)
}
