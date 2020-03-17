import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"
//React Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RecentlyViewed(props) {
    console.log(props)
    return (
        <Card className={styles.CardContainer} >
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>{props.data.address.city}</Card.Title>
                <Card.Text>{props.data.address.street}</Card.Text>
                <Button variant="primary">More information</Button>
            </Card.Body>
        </Card>
    );
};

export default RecentlyViewed;