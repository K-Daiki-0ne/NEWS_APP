import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/index';

describe('Root component render test', () => {
  const wrapper = shallow(<Home />);

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})