import axios, { AxiosResponse } from 'axios';

export const saucer = 'http://localhost:8081/saucer';

export interface SaucerData {
  id: number;
  name: string;
  category: string;
  price: string;
  preparation: string;
}

export const getAPI = async (url: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(url);
  return response.data;
};

export const createAPI = async (url: string, arg: SaucerData): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(url, arg);
  return response.data;
};

export const updateAPI = async (url: string, arg: SaucerData): Promise<any> => {
  const response: AxiosResponse<any> = await axios.put(url, arg);
  return response.data;
};
