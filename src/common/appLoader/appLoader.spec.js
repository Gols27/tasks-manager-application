import React from 'react';
import AppLoader from './';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  const wrapper = shallow(<AppLoader />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

