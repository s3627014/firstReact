import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';
export default class Card extends Component{
	getData(i){
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=29a65b0e2cfd51bcea9d09c3f3566464&language=en-US&page=1')
			.then((response) => {
				this.setState(() => {
					//return {data: response};
					return {image: "http://image.tmdb.org/t/p/w185/" + response.data.results[i].poster_path, title: response.data.results[i].title};
				});
			});
	}
	constructor(){
		super();
		this.state= {
			title: "CARD",
			image: ""
		};
	}
	
        
  
	render(){
		let index = this.props.index;
		this.getData(index);
		return (
			<div class={style.card}>
				<img src={this.state.image}/>
				<h1>{(this.state.title)}</h1>
				<p>{this.props.test}</p>
			</div>
		);
	}
		
	
}
