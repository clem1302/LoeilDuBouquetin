import React, {Component} from "react";
import axios from "axios";
import map from "../assets/images/map.svg";
import "../assets/css/Home.css";
import {Link} from "react-router-dom";
import FeaturedStations from '../components/FeaturedStations'

class Home extends Component {
	state = {
		currentStation: undefined,
		stations: undefined,
	};

	componentDidMount() {
		this.setUpMap();
	}

	render() {
		const {stations, currentStation} = this.state;

		return (
			<div className="home">
				<div className="container">
					<div className="titles">
						<h2>Carte intéractive</h2>
						{currentStation && <h2>{currentStation}</h2>}
					</div>
					<div className="left">
						<object data={map} className="map" type="text/html">Can't read SVG</object>
					</div>
					<div className="right stationslist">
						{stations && stations.map(station => {
							const nb_pistes = station.open_domains.info;
							return <div key={station.id} style={{backgroundImage: "url("+station.images[0]+"),url(https://i.pinimg.com/originals/ba/5c/d4/ba5cd4ab883552ebd22932317aa0d5a0.jpg)", backgroundPosition: "center", backgroundSize: "cover"}}>
								<div className="detail" >
									<div className="title">{station.name}</div>
									<div className="nbpiste">
										{nb_pistes}
									</div>
									<div className="pistes">
										<div className="green">
											<div className="bubble bg-green"/>
											{station.open_domains["green"]}</div>
										<div className="blue">
											<div className="bubble bg-blue"/>
											{station.open_domains["blue"]}</div>
										<div className="red">
											<div className="bubble bg-red"/>
											{station.open_domains["red"]}</div>
										<div className="black">
											<div className="bubble bg-black"/>
											{station.open_domains["black"]}</div>
									</div>
									<div className="details">
										<Link to={`/stations/${station.code}`}>Details</Link>
									</div>
								</div>
							</div>;
						})}
					</div>
				</div>
				<FeaturedStations/>
			</div>
		);
	}

	resetStations = () => {
		this.setState({stations: null, currentStation: null});
		for (let mountain of this.mountains) {
			mountain.style.fill = null;
		}
	};


	fetchStations = async (e) => {
		this.resetStations();
		const mountain             = e.currentTarget.id;
		e.currentTarget.style.fill = "#ac3737";
		const mountains            = {
			corse: "Corse",
			med: "Pyrénés",
			centre: "Massif central",
			alpesud: "Alpes du sud",
			alpenord: "Alpes du nord",
			jura: "Jura",
			vosges: "Vosges",
		};
		this.setState({
			currentStation: mountains[mountain],
		});

		const massif = {
			corse: "corse",
			med: "pyrenees",
			centre: "massif central",
			alpesud: "alpes du sud",
			alpenord: "alpes du nord",
			jura: "jura",
			vosges: "vosges",
		};

		const response = await axios.get("https://ski-station-api.herokuapp.com/api/v1/stations?massif=" + massif[mountain]);
		const data     = response.data;
		this.setState({stations: data});

	};

	setUpMap = () => {
		const map  = document.body.querySelector(".map");
		map.onload = () => {
			const mountains = map.contentDocument.querySelectorAll("#layer101 > path");
			this.mountains  = mountains;
			for (let mountain of mountains) {
				mountain.style.cursor = "pointer";
				mountain.addEventListener("mouseenter", function () {if (this.style.fill !== "rgb(172, 55, 55)") this.style.fill = "#FF5252";});
				mountain.addEventListener("mouseleave", function () {if (this.style.fill !== "rgb(172, 55, 55)") this.style.fill = null;});
				mountain.addEventListener("click", this.fetchStations);
			}
		};
	};
}

export default Home;
