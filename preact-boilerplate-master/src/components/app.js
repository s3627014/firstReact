import { h, Component } from 'preact';
import { Router } from 'preact-router';
import 'preact/devtools';
import Header from './header';
import Home from './home';
import Profile from './profile';
import Luke from './luke';
import Search from './search';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Search path="/search"/>
					<Profile path="/profile/" user="meeeee" penguin="Tomato Soup" />
					<Profile path="/profile/:user" />
					<Luke path="/luke" />
				</Router>
				
			</div>
		);
	}
}
