import React from "react";
import {shallow} from "enzyme";
import CustomMap from "../../components/CustomMap";

describe("The Footer component should", function() {
	it("renders without crashing", () => {
		const wrapper = shallow(<CustomMap />);
		expect(wrapper).toBeTruthy();
	});

/*
	it("should called setUpMap correctly", function() {
		const wrapper = mount(<Home />);
		jest.spyOn(wrapper.instance(), "setUpMap");
		wrapper.instance().componentDidMount();
		expect(wrapper.instance().setUpMap).toHaveBeenCalledTimes(1);
	});
*/
});
