import { AxiosRequestConfig } from "axios";
import { api } from "./api";

export interface IGet extends AxiosRequestConfig {
  endpoint: string;
}

export const getApi = async <TResponse>({
  endpoint,
  ...res
}: IGet): Promise<TResponse> => {
  const { data } = await api<TResponse>(endpoint, { ...res, method: "GET" });

  return data;
};
