import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../theme/theme';
import { HomeCompoent } from '../components/HomeComponent';
import CardComponent from '../components/CardComponent/CardComponent';
import HomeLoading from '../components/HomeLoading/HomeLoading';
import Pagination from '@material-ui/lab/Pagination';

describe('Home Component rendering test', () => {
  const wrapper = shallow(
    <ThemeProvider theme={theme}>
      <HomeCompoent />
    </ThemeProvider>
  )

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('component rendering test', () => {
    const wrap = wrapper.find('div');

    test('HomeComponent', () => expect(wrap).toBeTruthy());

    test('Child component', () => {
      const card = wrap.find(CardComponent);
      const loading = wrap.find(HomeLoading);
      expect(card).toBeTruthy();
      expect(loading).toBeTruthy();
    });

    test('material-ui pagination component', () => {
      const pagination = wrap.find(Pagination);
      expect(pagination).toBeTruthy();
    });
  });
});