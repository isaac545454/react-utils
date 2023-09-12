import { AxiosRequestConfig } from "axios";

export interface IPost extends AxiosRequestConfig {
    endpoint?: string
}
