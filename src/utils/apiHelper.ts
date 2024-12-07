import axios, { AxiosResponse } from 'axios';

export class APIHelper {
  static async get(url: string): Promise<AxiosResponse> {
    return axios.get(url);
  }

  static async post(url: string, data: any): Promise<AxiosResponse> {
    return axios.post(url, data);
  }
}
