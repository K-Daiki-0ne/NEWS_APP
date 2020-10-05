import { Request, Response } from 'express';
import { apiRequest } from '../api/news';

/**
 * @param req Request 
 * @param res Response
 * @return { object } Response NEWS API 
 * 
 */
export const get = async (req: Request, res: Response) => {
  const data = await apiRequest();
  const response = data.data;
  res.send(response);
}