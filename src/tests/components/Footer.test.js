import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

describe("The Footer component should", function() {

  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeTruthy();
  });

  it("render the only class possessed", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".bg-primary.color-white.text-center")).toBeTruthy();
  });

});
