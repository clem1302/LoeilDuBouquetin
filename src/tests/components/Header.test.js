import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

describe("The Header component should", function() {

  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });

  it("render the header element", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header"));
  });

});
