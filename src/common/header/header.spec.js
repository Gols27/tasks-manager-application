import React from 'react';
import Header from './';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
