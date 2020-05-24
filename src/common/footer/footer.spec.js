import React from 'react';
import Footer from './';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
