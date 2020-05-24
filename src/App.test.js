import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
