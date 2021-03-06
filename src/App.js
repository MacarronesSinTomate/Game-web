import React from 'react';
import { Login } from './containers/Login/Login';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import { RouteAuth } from './components/RouteAuth/RouteAuth';
import { Home } from './containers/Home/Home';
import { Stream } from './containers/Stream/Stream';

const App = () => {

	return(
		
		<Router>
			<Routes>

				<Route 
					path="/login" 
					element={ 
						<RouteAuth children={ <Login /> } /> 
					} 
				/>

				<Route 
					path="/" 
					element={ 
						<RouteAuth auth={ true } children={ <Home /> } /> 
					} 
				/>

				<Route 
					path="/stream" 
					element={ 
						<RouteAuth auth={ true } children={ <Stream /> } /> 
					} 
				/>

			</Routes>
		</Router>

	);
	
}

export default App;
