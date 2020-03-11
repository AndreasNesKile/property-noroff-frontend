import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"

function Property(props) {
    console.log(props)
    return (
        <div className={styles.CardContainer}>
            <img className={styles.CardImage} src={props.data.cover}></img>
            <div>{props.data.name}</div>
            <div>{props.data.isbn}</div>
        </div>
    );
};

export default Property;