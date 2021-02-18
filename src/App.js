import { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './components/indexPage/index';
import { Login, Register } from './components/login/index';
import { Dashboard } from './components/dashboard/dashboard';

function App() {

	// const [isUserLogin, setIsUserLogin] = useState(false)
	return (
    	<div className="App">
			<BrowserRouter>
				<Route exact path='/' component={HomePage} />
				<Route exact path="/login" component={Login}/>
				<Route exact path='/register/:invite_id' component={Register} />
				<Route exact path='/dashboard/:user_id' component={Dashboard} />
				
			</BrowserRouter>
    	</div>
  	);
}

export default App;
