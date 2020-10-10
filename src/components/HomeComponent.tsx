import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { newsRequest } from '../api/news';
import { NewsType } from '../type/news';
import CardComponent from './CardComponent/CardComponent';
import HomeLoding from './HomeLoading/HomeLoading';
import useStyle from './style';

export const HomeCompoent:React.FC = (): JSX.Element => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setLoading(false);
    newsRequest()
    .then((data: NewsType[]) => setNews(data))
    .then(() => setLoading(true))
    .catch(() => console.log('API Connect ...NO'));
  }, []);

  const classes = useStyle()

  // Get current news
  const newsPerPage: number = 5;
  const indexOfLastNews:number = currentPage * newsPerPage;
  const indexOfFirstNews:number = indexOfLastNews - newsPerPage;
  const currentNews: NewsType[] = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };
  

  return loading ? (
    <div >
      {
        currentNews.map((news: NewsType, index: number) => {
          return (
          <React.Fragment key={index}>
            <div className={classes.mg}>
              <CardComponent 
                props={news}
              />
            </div>
          </React.Fragment>
          )
        })
      }
      <Pagination
        count={4}
        onChange={handleChangePage}
      />
    </div>
  ) : (
    <div >
      <HomeLoding />
    </div>
  )
}