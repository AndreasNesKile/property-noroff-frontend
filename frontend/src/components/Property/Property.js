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

    return (
        <Card className={styles.CardContainer} >
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>{props.data.address.city}</Card.Title>
                <Card.Text>{props.data.address.street}</Card.Text>
                <Button onClick={handleClick} variant="primary">More information</Button>
            </Card.Body>
        </Card>
    );
};


export default Property;