import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Switch, Route, Router } from 'react-router-dom'

import SignIn from './components/Signin'
import SignUp from './components/Signup'

const generateClassName = createGenerateClassName({ productionPrefix: 'au' })

const App = ({ onSignIn, history }) => 
	<>
		<StylesProvider generateClassName={generateClassName}>
		<Router history={history}>
		  <Switch>
			  <Route path="/auth/signin">
		      <SignIn onSignIn={onSignIn} />
			  </Route>
			  <Route path="/auth/signup">
		      <SignUp onSignIn={onSignIn} />
			  </Route>
		  </Switch>
		</Router>
		</StylesProvider>
  </>


export default App
