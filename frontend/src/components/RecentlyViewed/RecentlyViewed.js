import React from "react";
import styles from "./RecentlyViewed.module.css";
import { Link } from "react-router-dom"
//React Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RecentlyViewed(props) {
    console.log(props)
    return (
        <Card className={styles.CardContainer}>
            <Card.Img variant="top" src={props.data.image} />
        </Card>
    );
};

export default RecentlyViewed;