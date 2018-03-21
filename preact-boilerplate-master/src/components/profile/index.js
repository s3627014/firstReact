import { h, Component } from 'preact';
import style from './style.less';

export default class Profile extends Component {
	state = {
		count: 0
		
	};
	
	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
		this.setState({name: "Luke"});
		
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user, penguin }, {count }) {
		console.log("Renderoonied.");
		console.log(count);
		this.state.count = count+1;
		return (
			
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>
				<img src="https://media.giphy.com/media/yqMtk0TfjRa5W/giphy.gif"/>
				<div>Current time: {this.state.time}</div>
				<div>Times spongebob has rocked the pants off you {count}.</div>
			</div>
			
		);
	}
}
