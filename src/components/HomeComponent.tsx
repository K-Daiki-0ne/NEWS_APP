import React, { useState, useEffect } from 'react';
import { newsRequest } from '../api/news';
import CardComponent from './CardComponent/CardComponent'

export const HomeCompoent:React.FC = (): JSX.Element => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
    newsRequest()
    .then((data: any) => setNews(data))
    .then(() => setLoading(true))
    .catch(() => console.log('API Connect ...NO'));
  }, [])

  return loading ? (
    <div >
      <CardComponent />
    </div>
  ) : (
    <div >
      <CardComponent />
    </div>
  )
}