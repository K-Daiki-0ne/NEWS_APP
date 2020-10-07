import React, { useState, useEffect } from 'react';
import { newsRequest } from '../api/news';
import CardComponent from './CardComponent/CardComponent'

export const HomeCompoent:React.FC = (): JSX.Element => {
  const [news, setNews] = useState();

  useEffect(() => {
    newsRequest()
    .then((data: any) => setNews(data))
    .catch(() => console.log('API Connect ...NO'));
  }, [])

  return (
    <div >
      <CardComponent />
    </div>
  )
}