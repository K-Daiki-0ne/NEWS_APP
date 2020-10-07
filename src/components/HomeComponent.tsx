import React, { useState, useEffect } from 'react';
import { newsRequest } from '../api/news';
import { NewsType } from '../type/news';
import CardComponent from './CardComponent/CardComponent';
import HomeLoding from './HomeLoading/HomeLoading';

export const HomeCompoent:React.FC = (): JSX.Element => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
    newsRequest()
    .then((data: NewsType[]) => setNews(data))
    .then(() => setLoading(true))
    .catch(() => console.log('API Connect ...NO'));
  }, [])

  return loading ? (
    <div >
      <CardComponent />
    </div>
  ) : (
    <div >
      <HomeLoding />
    </div>
  )
}