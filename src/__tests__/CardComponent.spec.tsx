import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../theme/theme';
import CardComponent from '../components/CardComponent/CardComponent';
import { NewsType } from '../type/news';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

describe('CardComponent rendering test', () => {
  const data: NewsType = {
    source: {
      id: null,
      name: 'test'
    },
    author: 'test',
    title: 'test',
    description: 'test',
    url: 'test',
    urlToImage: 'test',
    publishedAt: 'test',
    content: 'test',
  };
  const wrapper = shallow(
    <ThemeProvider theme={theme}>
      <CardComponent props={data}/>
    </ThemeProvider>
  );
  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('component rendering test', () => {
    const wrap = wrapper.find(Card);
    test('material-ui Card component', () => expect(wrap).toBeTruthy());

    test('a tag rendering test', () => {
      const anchor = wrap.find('a');
      expect(anchor).toBeTruthy();
    });
    
    test('material-ui CardActionArea component', () => {
      const cardActionArea = wrap.find(CardActionArea);
      expect(cardActionArea).toBeTruthy();
    });

    test('material-ui CardMedia component', () => {
      const cardMedia = wrap.find(CardMedia);
      expect(cardMedia).toBeTruthy();
    });

    test('material-ui CardContent', () => {
      const cardContent = wrap.find(CardContent);
      expect(cardContent).toBeTruthy();
    });

    test('material-ui typography component', () => {
      const typography = wrap.find(Typography);
      expect(typography).toBeTruthy();
    })
  })
})