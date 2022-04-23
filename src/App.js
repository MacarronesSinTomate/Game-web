import React from 'react';
import { Login } from './containers/Login/Login';
import { NavBar } from './components/NavBar/NavBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import { RouteAuth } from './components/RouteAuth/RouteAuth';

const Otra = () =>{

	return (
		<div>
			<p> OTRA </p>
		</div>
	);

}

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
					path="/asd" 
					element={ 
						<RouteAuth auth={ true } children={ <Otra /> }/> 
					} 
				/>
			</Routes>
		</Router>

	);
	
}

export default App;
