import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';
import Card from '../luke/card.js';
import { FormGroup, FormControl,HelpBlock } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input';
export default class Search extends Component{
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state= {
			value: "",
			help: "",
			resultCard: []
		};
		
	}
	onChangeText() {
		console.log("debouncing");
	  }
	getValidationState() {
		const length = this.state.value.length;
		let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;
		if (length > 10 && format.test(this.state.value) === true) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0){
			return 'error';
		}
		return null;
	  }
	
	  handleChange(e) {
		  console.log({value: e.target.value}); //target gets the element that called the event. So calling event.value means .value of the text field!! EURKA!
		let cardList = [];
		axios.get('https://api.themoviedb.org/3/search/movie?api_key=29a65b0e2cfd51bcea9d09c3f3566464&language=en-US&query=' + e.target.value + '&page=1&include_adult=false')
			.then((response) => {
				response.data.results.forEach(movie => {
					cardList.push(
						<Card data={movie}/>
					);
				});
				
				this.setState({resultCard: cardList});
			});
	  }
	render(){
		return (
			<div class={style.search}>
				<h1>MOVIE SEARCH</h1>
				<form>
					<FormGroup
						controlId="formBasicText"
					>
						<DebounceInput element={FormControl}
							type="text"
							placeholder="Enter Movie Title"
							debounceTimeout={400}
							onChange={this.handleChange}
						/>
						
						<FormControl.Feedback />
						<HelpBlock>{this.state.help}</HelpBlock>
					</FormGroup>
					
					
				</form>
				
				{this.state.resultCard}
				
			</div>
		);
	}
}
