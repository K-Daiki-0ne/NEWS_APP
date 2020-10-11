import axios from 'axios';
import { reqUrl } from '../config/url';

export const apiRequest = async () => {
  const req: string = reqUrl();

  const response = await axios.get(req);

  return response;
}