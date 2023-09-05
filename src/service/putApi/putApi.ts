import { api } from "../api";
import { IPut } from "@models";

export const putApi = async <TResponse>({
  endpoint,
  ...res
}: IPut): Promise<TResponse> => {
  const { data } = await api.put<TResponse>(endpoint, { ...res });

  return data;
};
