import axios from 'axios';

export const apiRequest = async () => {
  const newsUrl:string = '';
  const apiKey: string | undefined = '';

  const reqUrl: string = `${newsUrl}/${apiKey}`;

  const response = await axios.get(reqUrl);

  return response;
}