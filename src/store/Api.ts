import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
    });
  }

  public get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url);
  }
}
