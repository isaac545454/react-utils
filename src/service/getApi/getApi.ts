import { api } from "../../infra/api-client-config";
import { IGet } from "@models/IGet";

export const getApi = async <TResponse>({
  endpoint,
  ...res
}: IGet): Promise<TResponse> => {
  const { data } = await api<TResponse>(endpoint, { ...res, method: "GET" });

  return data;
};
