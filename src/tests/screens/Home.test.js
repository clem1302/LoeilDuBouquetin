import React from "react";
import { shallow, mount } from "enzyme";
import Home from "../../screens/Home";
import sinon from "sinon";

const STATION_MOCK = [
  {
    id: 195,
    massif: "pyrenees",
    code: "ax-3-domaines",
    name: "AX 3 DOMAINES",
    description:
      "3 Domaines, 1 territoire, une tribu\nDans une foret de sapin, sur un plateau d'altitude ou en haute montagne, La station d'Ax 3 Domaines c'est 80 km de pistes pour les amoureux des Pyrénées.",
    state: "Domaine skiable ouvert",
    altitude: "1400 m.",
    opening: "Du 02/12/2017 au 02/04/2018",
    partial_opening: "Le 02/12/2017",
    snowpark: 1,
    images: [
      "https://www.france-montagnes.com/sites/default/files/styles/station_slideshow_large/public/station/hiver/0-visuel-header-1.jpg"
    ],
    styles: [
      "stations club",
      "stations alti-forme",
      "étapes de montagne",
      "club",
      "alti-forme"
    ],
    contact: {
      address: "    Office de tourisme ",
      phone:
        "\n                \n                  Office de tourisme                                                    \n              "
    },
    domains: { info: "77 km de pistes", green: 9, blue: 10, red: 10, black: 6 },
    snowfall: { top: "160cm à 2400m", bottom: "130cm à 1400m" },
    open_domains: {
      info: "34 pistes sur 35",
      green: 9,
      blue: 10,
      red: 9,
      black: 6
    },
    ski_pass: { day: "36 €", week: "179,3 €" },
    weather: {
      state: "Soleil",
      morning: "Matin 2°",
      afternoon: "Après-midi 3°"
    },
    tops: false,
    created_at: "2019-02-14T16:14:58.394Z",
    updated_at: "2019-02-14T16:14:58.394Z"
  }
];

describe("Home page", function() {

  it("should render without crashing", function() {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(".home")).toBeTruthy();
  });

  it("should render the list of stations", function() {
    const wrapper = shallow(<Home />);
    wrapper.setState({ stations: STATION_MOCK });
    const instance = wrapper.instance();
    expect(wrapper.find(".title")).toBeTruthy();
    expect(instance.state.stations).toEqual(STATION_MOCK);
  });

  it("should mount correctly", function() {
    const spy = sinon.spy(Home.prototype, "componentDidMount");
    const wrapper = mount(<Home />);
    expect(Home.prototype.componentDidMount.calledOnce).toBe(true);
  });

  it("should called setUpMap correctly", function() {
    const wrapper = mount(<Home />);
    jest.spyOn(wrapper.instance(), "setUpMap");
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().setUpMap).toHaveBeenCalledTimes(1);
  });

});
