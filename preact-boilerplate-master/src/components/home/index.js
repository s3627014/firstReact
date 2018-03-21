import { h } from 'preact';
import style from './style.less';
import { Carousel } from 'react-bootstrap';
export default () => {
	return (
		<div class={style.home}>
		<h1>
			<Carousel width = "50%">
			<Carousel.Item>
			  <img  src="../assets/stock.jpg" />
			  <Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img width={900} height={500} alt="900x500" src="../assets/stock.jpg" />
			  <Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img width={900} height={500} alt="900x500" src="../assets/stock.jpg" />
			  <Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			  </Carousel.Caption>
			</Carousel.Item>
		  </Carousel>
		  </h1>
		</div>
	);
};
