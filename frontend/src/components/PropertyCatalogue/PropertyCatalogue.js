import React from 'react';
import styles from './PropertyCatalogue.module.css';
import Property from '../Property/Property';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import NavigationBar from '../NavigationBar/NavigationBar';
import axios from 'axios';
import { motion } from 'framer-motion';

//React Bootstrap
import CardGroup from 'react-bootstrap/CardGroup';

class PropertyCatalogue extends React.Component {
	state = {
		properties: [],
		recentproperties: [],
		anyrecents: false
	};
	//Transition for component
	pageTransition = {
		in: {
			opacity: 1,
			x: 0
		},
		out: {
			opacity: 0,
			x: '-10%'
		}
	};
	//Fetching response from backend and populating state with response
	async componentDidMount() {
		let Api_Url = `https://propertyproject.azurewebsites.net/api/properties`;
		try {
			await axios.get(Api_Url).then((res) => {
				this.setState({ properties: res.data });
			});
		} catch (e) {
			console.log(e);
		}
	}

	//function to set recently viewed in the component
	SetRecentlyViewed() {
		if (sessionStorage.getItem('Rview3') != null) {
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview3')]);
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview2')]);
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview1')]);
			if (this.state.anyrecents === false) {
				this.setState({ anyrecents: true });
			}
		} else if (sessionStorage.getItem('Rview2') != null) {
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview2')]);
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview1')]);
			if (this.state.anyrecents === false) {
				this.setState({ anyrecents: true });
			}
		} else if (sessionStorage.getItem('Rview1') != null) {
			this.state.recentproperties.push(this.state.properties[sessionStorage.getItem('Rview1')]);
			if (this.state.anyrecents === false) {
				this.setState({ anyrecents: true });
			}
		} else {
		}
	}

	render() {
		//displaying a property for each instance in the array once populated
		const propertycards = this.state.properties.map((data, index) => {
			return <Property key={index} index={index} data={data} />;
		});

		this.SetRecentlyViewed();
		const recentlyviewed = this.state.recentproperties.map((data, index) => {
			return <RecentlyViewed key={index} data={data} />;
		});

		const renderRecentTitle = this.state.anyrecents;

		return (
			<motion.div
				className={styles.CatalogueContainer}
				initial="out"
				animate="in"
				exit="out"
				variants={this.pageTransition}
			>
				<NavigationBar />

				<div className={styles.RecentlyViewedContainer}>
					<div className={styles.RecentlyViewed}>
						{renderRecentTitle ? <h4>Recently viewed:</h4> : <div></div>}
						<div className="RecentlyViewed">{recentlyviewed.reverse()}</div>
					</div>
				</div>

				<div className={styles.CardDeckContainer}>
					<CardGroup className={styles.CardGroup}>
						<div className="Properties">{propertycards}</div>
					</CardGroup>
				</div>
			</motion.div>
		);
	}
}

export default PropertyCatalogue;
