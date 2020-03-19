import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"
//React Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



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
        <Card className={styles.CardContainer} >
            <Card.Img variant="top" src={cardImage + ".jpg"} />
            <Card.Body>
                <Card.Title>{props.data.city}</Card.Title>
                <Card.Text>{props.data.line_1}</Card.Text>
                <Link to={`Property/${props.data.id}`}><Button onClick={handleClick} variant="primary">More information</Button></Link>
            </Card.Body>
        </Card>
    );
};


export default Property;