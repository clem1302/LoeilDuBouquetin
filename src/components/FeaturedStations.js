import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "../assets/css/components/FeaturedStations.css";

class FeaturedStations extends React.Component {
	state = {
		stations: null,
	};

	componentDidMount() {
		this.fetchFeaturedStations();
	}

	render() {
		const {stations} = this.state;

		if (!stations)
			return null;
		return <div className="featuredStations">
			<h2>les {stations.length} stations à la une</h2>
			<Slider {...{
				infinite: true,
				speed: 500,
				slidesToShow: 5,
				slidesToScroll: 5,
			}}>
				{stations.map(station => {
					const nb_pistes = station.open_domains.info;
					return <div>
						<div className="item" key={station.id} style={{
							backgroundImage: "url(" + (station.images && station.images[0]) + "),url(https://i.pinimg.com/originals/ba/5c/d4/ba5cd4ab883552ebd22932317aa0d5a0.jpg)",
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}>
							<div className="detail">
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
						</div>
					</div>;
				})}
			</Slider>
		</div>;
	}

	fetchFeaturedStations = async () => {
		const {data} = await axios.get("https://ski-station-api.herokuapp.com/api/v1/stations/ski/tops");
		this.setState({stations: data});
	};
}

export default FeaturedStations;