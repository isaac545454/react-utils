import axios, { AxiosRequestConfig } from "axios";

export interface IPost extends AxiosRequestConfig {}

export const postApi = async <TResponse>({
  ...res
}: IPost): Promise<TResponse> => {
  const response = await axios<TResponse>({
    method: "POST",
    ...res,
  });

  return response.data;
};
