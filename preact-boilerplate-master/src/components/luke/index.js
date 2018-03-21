import { h, Component } from 'preact';
import Card from './card.js';
import style from './style.less';
import axios from 'axios';
export default class Luke extends Component{
	
	constructor(){
		super();
		this.state= {
			title: "Most Popular",
			list: []
		};
	}
	componentDidMount(){
		let cardList = [];
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=29a65b0e2cfd51bcea9d09c3f3566464&language=en-US&page=1')
			.then((response) => {
				response.data.results.forEach(movie => {
					cardList.push(
						<Card data={movie}/>
					);
				});
				this.setState({list: cardList});
			});
	}
	
	render(){
		return (
			<div class={style.luke}>
				<h4>
					<h1 title={"boogie"}>{this.state.title}</h1>
					{this.state.list}
				</h4>
			</div>
		);
	}
		
	
}
