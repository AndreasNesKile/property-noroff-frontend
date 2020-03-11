import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"

function Property(passed) {
    console.log(passed.data)
    return (
        <div className={styles.CardContainer}>
            <p>test</p>
        </div>
    );
};

export default Property;