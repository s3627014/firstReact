import { h, Component } from 'preact';
import {Modal,Button,Badge} from 'react-bootstrap';
export default class Luke extends Component{
	
	constructor(){
		super();
		this.state= {
			title: "Movies",
			list: []
		};
	}
	render(){
		let data=this.props.data;
		console.log(data.vote_average);
		return (
			<div>
				<Modal
					{...this.props}
					bsSize="large"
					aria-labelledby="contained-modal-title-lg"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">{data.title} <Badge  bsStyle="primary">{ data.vote_average}</Badge></Modal.Title>

					</Modal.Header>
					<Modal.Body>
						<h4>{data.overview}</h4>

					</Modal.Body>
					<Modal.Footer>
						
						<Button onClick={this.props.onHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
		
	
}
