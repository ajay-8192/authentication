import { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './components/indexPage/index';
import { Login, Register } from './components/login/index';
import { Dashboard } from './components/dashboard/dashboard';

function App() {

	const [isUserLogin, setIsUserLogin] = useState(false)
	return (
    	<div className="App">
			<BrowserRouter>
				<Route exact path='/' component={HomePage} />
				<Route path="/login" component={() => <Login isUserLogin={setIsUserLogin}/>}/>
				<Route>
					{isUserLogin ? <Redirect to='/dashboard/:user_id' /> : <Redirect to='/login' />}
				</Route>
				<Route path='/register/:invite_id' component={Register} />
				
			</BrowserRouter>
    	</div>
  	);
}

export default App;
