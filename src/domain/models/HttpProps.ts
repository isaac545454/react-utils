import { AxiosRequestConfig } from "axios";

export type HttpProps = AxiosRequestConfig & { endpoint?: string }
