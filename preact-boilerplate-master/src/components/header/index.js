import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	constructor(){
		super();
		this.state = {test: "Game"};
	}
	render() {
		
		return (
			<header class={style.header}>
				<h1>Preact Movie App</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/search">Search</Link>
					<Link href="/luke">Popular</Link>
				</nav>
			</header>
		);
	}
}
