import React from 'react';
import { Home } from './';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  const wrapper = mount(<Home getTasks={jest.fn()} addTask={jest.fn()}/>);
  wrapper.find('button').simulate('click');
  expect(mountToJson(wrapper)).toMatchSnapshot();
});