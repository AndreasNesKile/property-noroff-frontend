import React from "react";
import styles from "./PropertyCatalogue.module.css";
import Property from "../Property/Property"


class PropertyCatalogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: []
    };  
  }

  render() {
    const propertycards = this.state.properties.map((property) => {
      return (
        <Property property={property} />
      );
    });

    return (
    <div>{propertycards}</div>
    );
  }
}

export default PropertyCatalogue;
