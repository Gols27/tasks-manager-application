import React from 'react';
import Page from './';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const props= { 
  toggleStatus : jest.fn(),
  item: { 
    id : '123', 
    name: '1234', 
    status: 'Pending',
  }
}

it('renders without crashing', () => {
  const wrapper = shallow(<Page {...props}/>);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
