import { AxiosRequestConfig } from "axios";

export interface IGet extends AxiosRequestConfig {
  endpoint: string;
}
