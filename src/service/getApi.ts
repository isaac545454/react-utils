import { api } from "./api";
import { IGet } from "@models";

export const getApi = async <TResponse>({
  endpoint,
  ...res
}: IGet): Promise<TResponse> => {
  const { data } = await api<TResponse>(endpoint, { ...res, method: "GET" });

  return data;
};
