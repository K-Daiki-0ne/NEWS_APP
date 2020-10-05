/**
 * @description format apr request url
 * @return string
 */

export function reqUrl (): string {
  const newsUrl:string = 'http://newsapi.org/v2/top-headlines?country=jp&apiKey';
  const apiKey: string | undefined = process.env.NEWS_API_KEY;
  const reqUrl: string = `${newsUrl}=${apiKey}`;
  return reqUrl;
}