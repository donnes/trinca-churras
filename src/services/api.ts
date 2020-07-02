import axios, { AxiosInstance } from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';

export class Api {
  api: AxiosInstance

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.api = axios.create({
      baseURL: config.url,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
