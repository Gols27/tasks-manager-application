import React from 'react';
import { Login } from './';
import { shallow, mount } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';


it('renders without crashing', () => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  const wrapper = shallow(<Login />);

  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders with changed input', () => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  const wrapper = shallow(<Login userLoginRequest={jest.fn()} apiFailed={{apiError: true}}/>);

  wrapper.find('[name="password"]').simulate('change', {target: {value : 'Admin'}});
  wrapper.find('[name="userId"]').simulate('change', {target: {value : 'Admin'}});
  wrapper.find('[name="login"]').simulate('submit', {preventDefault: jest.fn()});
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders with changed input', () => {
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  const wrapper = mount(<Login userLoginRequest={jest.fn()} users={{userAuth: false}} />);
  expect(mountToJson(wrapper)).toMatchSnapshot();
});

