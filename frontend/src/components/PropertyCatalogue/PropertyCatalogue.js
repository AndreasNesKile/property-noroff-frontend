import React from "react";
import styles from "./PropertyCatalogue.module.css";
import Property from "../Property/Property"
import NavigationBar from "../NavigationBar/NavigationBar"

//React Bootstrap
import CardDeck from 'react-bootstrap/CardDeck'

class PropertyCatalogue extends React.Component {
  state = {
      properties: [{address: {city: "Oslo", street: "Stoopid street 14"},image: 'https://dms-cf-02.dimu.org/image/02349Seijwma?dimension=250x250'},{address: {city: "Oslo", street: "Memelane 69"},image: 'https://ringutleier.fra1.digitaloceanspaces.com/wp-content/uploads/2020/01/1-5-250x250.jpg'},{address: {city: "Sarpsborg", street: "Osloveien 24"},image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bassengveien%2C_Ringerike_-_001.jpg/250px-Bassengveien%2C_Ringerike_-_001.jpg'},{address: {city: "Stavanger", street: "Stavangergata 10"},image: 'https://solidmesterbygg.no/wp-content/uploads/2019/11/69442978_1105638476300316_4997689091689545728_n-250x250.jpg'},{address: {city: "Oslo", street: "Askeladdengata 4"},image: 'https://fra1.digitaloceanspaces.com/ringutleier/wp-content/uploads/2020/02/19232117/D431C005-C4FF-472C-9C2E-0E59B22A4274-250x250.jpeg'},{address: {city: "Oslo", street: "Stoopid street 14"},image: 'https://dms-cf-02.dimu.org/image/02349Seijwma?dimension=250x250'},{address: {city: "Oslo", street: "Memelane 69"},image: 'https://ringutleier.fra1.digitaloceanspaces.com/wp-content/uploads/2020/01/1-5-250x250.jpg'},{address: {city: "Sarpsborg", street: "Osloveien 24"},image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bassengveien%2C_Ringerike_-_001.jpg/250px-Bassengveien%2C_Ringerike_-_001.jpg'},{address: {city: "Stavanger", street: "Stavangergata 10"},image: 'https://solidmesterbygg.no/wp-content/uploads/2019/11/69442978_1105638476300316_4997689091689545728_n-250x250.jpg'},{address: {city: "Oslo", street: "Askeladdengata 4"},image: 'https://fra1.digitaloceanspaces.com/ringutleier/wp-content/uploads/2020/02/19232117/D431C005-C4FF-472C-9C2E-0E59B22A4274-250x250.jpeg'},{address: {city: "Oslo", street: "Stoopid street 14"},image: 'https://dms-cf-02.dimu.org/image/02349Seijwma?dimension=250x250'},{address: {city: "Oslo", street: "Memelane 69"},image: 'https://ringutleier.fra1.digitaloceanspaces.com/wp-content/uploads/2020/01/1-5-250x250.jpg'},{address: {city: "Sarpsborg", street: "Osloveien 24"},image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bassengveien%2C_Ringerike_-_001.jpg/250px-Bassengveien%2C_Ringerike_-_001.jpg'},{address: {city: "Stavanger", street: "Stavangergata 10"},image: 'https://solidmesterbygg.no/wp-content/uploads/2019/11/69442978_1105638476300316_4997689091689545728_n-250x250.jpg'},{address: {city: "Oslo", street: "Askeladdengata 4"},image: 'https://fra1.digitaloceanspaces.com/ringutleier/wp-content/uploads/2020/02/19232117/D431C005-C4FF-472C-9C2E-0E59B22A4274-250x250.jpeg'},{address: {city: "Oslo", street: "Stoopid street 14"},image: 'https://dms-cf-02.dimu.org/image/02349Seijwma?dimension=250x250'},{address: {city: "Oslo", street: "Memelane 69"},image: 'https://ringutleier.fra1.digitaloceanspaces.com/wp-content/uploads/2020/01/1-5-250x250.jpg'},{address: {city: "Sarpsborg", street: "Osloveien 24"},image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bassengveien%2C_Ringerike_-_001.jpg/250px-Bassengveien%2C_Ringerike_-_001.jpg'},{address: {city: "Stavanger", street: "Stavangergata 10"},image: 'https://solidmesterbygg.no/wp-content/uploads/2019/11/69442978_1105638476300316_4997689091689545728_n-250x250.jpg'},{address: {city: "Oslo", street: "Askeladdengata 4"},image: 'https://fra1.digitaloceanspaces.com/ringutleier/wp-content/uploads/2020/02/19232117/D431C005-C4FF-472C-9C2E-0E59B22A4274-250x250.jpeg'},] 
  }

  render() {
    const propertycards = this.state.properties.map((data, index) => {
      return (
        <Property key={index} data={data} />
      );
    });

    return (
      <div>
        <NavigationBar />
        <CardDeck className={styles.CardDeck}>
          <div className="Properties">{propertycards}</div>
        </CardDeck>
      </div>
    );
  }
}

export default PropertyCatalogue;
