import map from "../assets/images/map.svg";
import React from "react";

class CustomMap extends React.Component{
	componentDidMount() {
		this.setUpMap();
	}

	render(){
		return <object data={map} className="map" type="text/html">
			Can't read SVG
		</object>
	}

	setUpMap = () => {
		const map = document.body.querySelector(".map");
		if (!map) return false;
		map.onload = () => {
			const mountains = map.contentDocument.querySelectorAll(
				"#layer101 > path"
			);
			this.props.parent.mountains = mountains;
			for (let mountain of mountains) {
				mountain.style.cursor = "pointer";
				mountain.addEventListener("mouseenter", function() {
					if (this.style.fill !== "rgb(172, 55, 55)")
						this.style.fill = "#FF5252";
				});
				mountain.addEventListener("mouseleave", function() {
					if (this.style.fill !== "rgb(172, 55, 55)") this.style.fill = null;
				});
				mountain.addEventListener("click", this.props.fetchStations);
			}
		};
	};
}

export default CustomMap;