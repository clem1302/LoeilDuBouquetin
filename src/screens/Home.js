import React, {Component} from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import map from "../assets/images/map.svg";
import "../assets/css/Home.css";

class Home extends Component {
	state = {
		currentStation: undefined,
		stations: undefined,
	};

	componentDidMount() {
		console.log("componentDidMount");
		this.setUpMap();
	}

	render() {
		console.log("render");
		const {stations, currentStation} = this.state;

		return (
			<div className="home">
				<header>
					<nav className="bg-primary color-white">
						<div className="logo item">
							<img src={logo} alt="l'oeil du bouquetin"/>
						</div>
						<div className="item">
							<a href="/" className="color-white">
								<h1 className="brand">L'oeil du bouquetin</h1>
							</a>
						</div>
					</nav>
				</header>
				<div className="container">
					<div className="titles">
						<h2>Carte intéractive</h2>
						{currentStation && <h2>{currentStation}</h2>}
					</div>
					<div className="left">
						<object data={map} className="map" type="text/html"/>
					</div>
					<div className="right">
						{stations && stations.map(station => <table key={station.id}>
							station.name
						</table>)}
					</div>
				</div>
			</div>
		);
	}

	resetStations = () => {
		console.log("resetStations");
		this.setState({stations: null, currentStation: null});
		for(let mountain of this.mountains){
			mountain.style.fill = null;
		}
	};

	fetchStations = (e) => {
		console.log("fetchStations");
		this.resetStations();
		const mountain             = e.currentTarget.id;
		e.currentTarget.style.fill = "#ac3737";
		const mountains            = {
			corse: "Corse",
			med: "Méditerranée",
			centre: "Massif central",
			alpesud: "Alpes du sud",
			alpenord: "Alpes du nord",
			jura: "Jura",
			vosges: "Vosges",
		};
		this.setState({
			currentStation: mountains[mountain],
		});
	};

	setUpMap = () => {
		console.log("setUpMap");
		const map  = document.body.querySelector(".map");
		map.onload = () => {
			const mountains = map.contentDocument.querySelectorAll("#layer101 > path");
			this.mountains   = mountains;
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
