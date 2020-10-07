import axios from 'axios';

export const newsRequest = async() => {
  const url: string = 'http://localhost:3001/';
  const response = await axios.get(url);
  return response.data;
}