import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../theme/theme';
import Home from '../../pages/index';
import { HomeCompoent } from '../components/HomeComponent';
import { 
  AppBar,
  Container,
  Toolbar,
  Typography
} from '@material-ui/core';


describe('Root component rendering test', () => {
  const wrapper = shallow(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('rendering test', () => {
    const wrap = wrapper.find('div');
    test('root', () => expect(wrap).toBeTruthy());

    test('materil-ui header component', () => {
      const header = wrap.find(AppBar);
      expect(header).toBeTruthy();
    });

    test('material-ui Toolbar component', () => {
      const toolbar = wrap.find(Toolbar);
      expect(toolbar).toBeTruthy();
    })

    test('material-ui Typography component', () => {
      const typography = wrap.find(Typography);
      expect(typography).toBeTruthy();
    })

    test('material-ui contaienr conponent', () => {
      const contaienr = wrap.find(Container);
      expect(contaienr).toBeTruthy();
    });

    test('Child component', () => {
      const home = wrap.find(Home);
      expect(home).toBeTruthy();
    })
  });
});