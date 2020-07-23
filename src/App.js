import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './screens/homepage/Homepage';
import Login from './screens/login/Login';
import * as ROUTES from './constants/routes';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={ROUTES.LOGIN} component={Login} />
				<Route path={ROUTES.HOME} component={Homepage} />
				<Route path={ROUTES.LANDING} component={Homepage} />
			</Switch>
		</Router>
	);
}

export default App;
