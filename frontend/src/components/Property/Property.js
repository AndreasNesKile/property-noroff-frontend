import React from 'react';
import styles from './Property.module.css';
import { Link } from 'react-router-dom';
//React Bootstrap
import Card from 'react-bootstrap/Card';

function Property(props) {
	function handleClick() {
		if (sessionStorage.getItem('Rview1') === null) {
			sessionStorage.setItem('Rview1', props.index);
		} else if (sessionStorage.getItem('Rview2') === null) {
			sessionStorage.setItem('Rview2', sessionStorage.getItem('Rview1'));
			sessionStorage.setItem('Rview1', props.index);
		} else if (sessionStorage.getItem('Rview1') == props.index) {
			//Do nothing - DO NOT REMOVE
		} else if (sessionStorage.getItem('Rview2') == props.index) {
			sessionStorage.setItem('Rview2', sessionStorage.getItem('Rview1'));
			sessionStorage.setItem('Rview1', props.index);
		} else if (sessionStorage.getItem('Rview3') == props.index) {
			sessionStorage.setItem('Rview3', sessionStorage.getItem('Rview2'));
			sessionStorage.setItem('Rview2', sessionStorage.getItem('Rview1'));
			sessionStorage.setItem('Rview1', props.index);
		} else {
			sessionStorage.setItem('Rview3', sessionStorage.getItem('Rview2'));
			sessionStorage.setItem('Rview2', sessionStorage.getItem('Rview1'));
			sessionStorage.setItem('Rview1', props.index);
		}
	}

	let cardImage = null;
	if (props.data.propertyImage) {
		cardImage = props.data.propertyImage.url;
	}

	return (
		<Link to={`properties/${props.data.id}`}>
			<Card text="dark" onClick={handleClick} className={styles.CardContainer}>
				<Card.Body>
					<Card.Img className={styles.CardImg} variant="top" src={cardImage + '.jpg'} />
					<Card.Title className={styles.CardTitle}>{props.data.city}</Card.Title>
					<Card.Text className={styles.Line1}>{props.data.line_1}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text className={styles.CardFooter}>${props.data.value}</Card.Text>
				</Card.Footer>
			</Card>
		</Link>
	);
}

export default Property;
