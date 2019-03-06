import React from "react";
import { shallow } from "enzyme";
import BackButton from "../../components/BackButton";

describe("The Footer component should", function() {
	it("renders without crashing", () => {
		const wrapper = shallow(<BackButton />);
		expect(wrapper).toBeTruthy();
	});
});
