import { h, Component } from 'preact';
import style from './style.less';
import Modal from './modal';
export default class Card extends Component{

	constructor(){
		super();
		this.state= {
			title: "CARD",
			image: "../assets/404.png",
			lgShow: false
		};
	}
	
	// PASS THE MODAL THE PROPS AND CREATE IT HERE?
	componentDidMount(){
		if (this.props.data.poster_path !== null){
			console.log("Help");
			this.setState({image: "http://image.tmdb.org/t/p/w185/" + this.props.data.poster_path});
		}
	}
	render(){
		let lgClose = () => this.setState({ lgShow: false });
		let data = this.props.data;
		return (
			<div class={style.card} onClick={() => this.setState({ lgShow: true })}>
				<img src={this.state.image}/>
				<h1>{(data.title)}</h1>
				<Modal show={this.state.lgShow} onHide={lgClose} data={data} />
				
			</div>
		);
	}
		
	
}
