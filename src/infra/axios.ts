import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
 

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export const AxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export function request<T>(config: AxiosRequestConfig): Promise<T> {
  const source = Axios.CancelToken.source();

  const promise = AxiosInstance({
    ...config,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;