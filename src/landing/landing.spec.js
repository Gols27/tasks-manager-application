import React from "react";
import Landing from "./";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

it("renders without crashing", () => {
  const wrapper = mount(<Landing />);
  expect(mountToJson(wrapper)).toMatchSnapshot();
});
