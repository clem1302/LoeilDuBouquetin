import React from "react";
import { shallow } from "enzyme";
import {App} from "../index";

describe("The Footer component should", function() {
	it("renders without crashing", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toBeTruthy();
	});
});