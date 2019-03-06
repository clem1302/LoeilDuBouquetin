import { shallow } from "enzyme";
import React from "react";
import Station from "../../screens/Station";

const stationMock = {
  id: 1223443,
  massif: "alpes du nord",
  code: "aillons--margeriaz",
  name: "AILLONS- MARGERIAZ",
  description:
    "Au cœur des montagnes élancées du Parc naturel régional du Massif des Bauges, les Aillons-Margériaz vous accueillent !\nUne station familiale idéalement située à 30mn de Chambéry et 1h30 de Lyon.",
  state: "Domaine skiable ouvert",
  altitude: null,
  opening: "Du 22/12/2018 au 31/03/2019",
  partial_opening: null,
  snowpark: 0,
  images: [
    "https://www.france-montagnes.com/sites/default/files/styles/station_slideshow_large/public/station/hiver/-GLM4352-2.jpg"
  ],
  styles: [
    "stations nouvelles glisses",
    "stations villages de charme",
    "village de charme",
    "montagne aventure",
    "montagne douce"
  ],
  contact: {
    address:
      "    OFFICE DE TOURISME DES AILLONS-MARGERIAZ     chef lieu     73340 - AILLONS- MARGERIAZ   ",
    phone:
      "\n                \n                  OFFICE DE TOURISME DES AILLONS-MARGERIAZ                  chef lieu                  73340 - AILLONS- MARGERIAZ                \n              "
  },
  domains: {
    info: "40 km de pistes",
    green: 8,
    blue: 22,
    red: 6,
    black: 4
  },
  snowfall: {
    top: "190cm à 1900m",
    bottom: "60cm à 1000m"
  },
  open_domains: {
    info: "38 pistes sur 40",
    green: 7,
    blue: 21,
    red: 6,
    black: 4
  },
  ski_pass: {
    day: "26 €",
    week: "127 €"
  },
  weather: {
    state: "Soleil",
    morning: "Matin -2°",
    afternoon: "Après-midi 3°"
  },
  tops: false,
  created_at: "2019-02-14T16:09:58.428Z",
  updated_at: "2019-02-14T16:09:58.428Z"
};

it("renders without crashing", () => {
  const wrapper = shallow(<Station match={{ params: { station: "ski" } }} />);
  wrapper.setState({ station: stationMock });
  expect(wrapper.find(".station"));
});
