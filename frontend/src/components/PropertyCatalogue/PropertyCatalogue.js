import React from "react";
import styles from "./PropertyCatalogue.module.css";
import Property from "../Property/Property"
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed"
import NavigationBar from "../NavigationBar/NavigationBar"
import axios from 'axios';

//React Bootstrap
import CardGroup from 'react-bootstrap/CardGroup'


class PropertyCatalogue extends React.Component {
  state = {
      properties: [] ,
      recentproperties: [],
      anyrecents: false
  }

  async componentDidMount() {
		let Api_Url = `http://localhost:5000/api/properties`;
		try {
			await axios.get(Api_Url).then((res) => {
				this.setState({ properties: res.data });
        console.log(this.state.properties);
			});
		} catch (e) {
			console.log(e);
		}
	}

  SetRecentlyViewed() {
    if (sessionStorage.getItem("Rview3") != null) {
      console.log("did 3")
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview3")]);
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview2")]);
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview1")]);
      if (this.state.anyrecents === false) {
        this.setState({ anyrecents: true })
      }
    } else if(sessionStorage.getItem("Rview2") != null) {
      console.log("did 2")
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview2")]);
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview1")]);
      if (this.state.anyrecents === false) {
        this.setState({ anyrecents: true })
      }
    } else if(sessionStorage.getItem("Rview1") != null) {
      console.log("did 1")
      this.state.recentproperties.push(this.state.properties[sessionStorage.getItem("Rview1")]);
      if (this.state.anyrecents === false) {
        this.setState({ anyrecents: true })
      }
    } else {
    }
  }

  render() {
    const propertycards = this.state.properties.map((data, index) => {
      return (
        <Property key={index} index={index} data={data} />
      );
    });

    this.SetRecentlyViewed()
    const recentlyviewed = this.state.recentproperties.map((data, index) => {
      return (
        <RecentlyViewed key={index} data={data} />
      );
    });

    const renderRecentTitle = this.state.anyrecents

    return (
      <div className={styles.CatalogueContainer}>
        <NavigationBar />

        <div className={styles.RecentlyViewedContainer}>
          <div className={styles.RecentlyViewed}>
            {renderRecentTitle ? (
              <h4 >Recently viewed:</h4>
            ) : (
              <div></div>
            )}
            <div className="RecentlyViewed">{recentlyviewed.reverse()}</div>
          </div>
        </div>

        <div className={styles.CardDeckContainer}>
          <CardGroup className={styles.CardGroup} >
            <div className="Properties">{propertycards}</div>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default PropertyCatalogue;
