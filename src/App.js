import { Login } from './containers/Login/Login';
import { NavBar } from './components/NavBar/NavBar';

import './App.css';
import { RouteGuard } from './components/RouteGuard/RouteGuard';

const App = () => {

	return(

		<div> 
			<RouteGuard /> 
		</div>

	);
}

export default App;
