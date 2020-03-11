import React from "react";
import styles from "./PropertyCatalogue.module.css";
import Property from "../Property/Property"


class PropertyCatalogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: [{name: 'Zero to one',isbn: '9780804139298',author: 'Peter Thiel',cover: 'https://images.gr-assets.com/books/1414347376l/18050143.jpg',status: false},{name: "The Manager's Path",isbn: '9781491973899',author: 'Camille Fournier',cover: 'https://images.gr-assets.com/books/1484107737l/33369254.jpg',status: false},{name: 'Calculus, Better Explained',isbn: '9781470070700',author: 'Kalid Azad',cover: 'https://images.gr-assets.com/books/1448590460l/27993945.jpg',status: false}]
    };  
  }

  render() {
    const propertycards = this.state.properties.map((property, index) => {
      return (
        <Property key={index} property={property} />
      );
    });

    return (
      <div>
        <div className="Properties">{propertycards}</div>
      </div>
    );
  }
}

export default PropertyCatalogue;
