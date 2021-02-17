import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/indexPage/index';
import { Login, Register } from './components/login/index';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
	return (
    	<div className="App">
			<BrowserRouter>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={Login} />
				<Route path='/register/:invite_id' component={Register} />
				<Route path='/dashboard' component={Dashboard} />
			</BrowserRouter>
    	</div>
  	);
}

export default App;
