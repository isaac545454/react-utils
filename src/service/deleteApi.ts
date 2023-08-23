import axios, { AxiosRequestConfig } from "axios";

export interface IDelete extends AxiosRequestConfig {}

export const deleteApi = async <TResponse>({
  ...res
}: IDelete): Promise<TResponse> => {
  const response = await axios<TResponse>({
    method: "delete",
    ...res,
  });

  return response.data;
};
