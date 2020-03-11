import React from "react";
import styles from "./Property.module.css";
import { Link } from "react-router-dom"

function Property(passed) {
    return (
        <div className={styles.CardContainer}>
            <p>{passed.property}</p>
        </div>
    );
};

export default Property;