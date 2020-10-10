import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../theme/theme';
import Home from '../../pages/index';

describe('Root component rendering test', () => {
  const wrapper = shallow(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})