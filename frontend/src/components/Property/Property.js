import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"
//React Bootstrap
import Card from 'react-bootstrap/Card'



function Property(props) {
    function handleClick() {
        if (sessionStorage.getItem("Rview1") === null) {
            sessionStorage.setItem("Rview1",props.index)
        } else if(sessionStorage.getItem("Rview2") === null) {
            sessionStorage.setItem("Rview2",sessionStorage.getItem("Rview1"))
            sessionStorage.setItem("Rview1",props.index)
        } else {
            sessionStorage.setItem("Rview3",sessionStorage.getItem("Rview2"))
            sessionStorage.setItem("Rview2",sessionStorage.getItem("Rview1"))
            sessionStorage.setItem("Rview1",props.index)
        }
    }

    let cardImage = null
    if(props.data.propertyImage){
        cardImage = props.data.propertyImage.url
    }

    return (
        <Link to={`Properties/${props.data.id}`}>
            <Card border="light" bg="light" text="dark" onClick={handleClick} className={styles.CardContainer} >
                <Card.Body>
                <Card.Title className={styles.CardTitle}>{props.data.city}</Card.Title>
                <Card.Img className={styles.CardImg} variant="top" src={cardImage + ".jpg"} />
                    <Card.Text>{props.data.line_1}</Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
    );
};


export default Property;