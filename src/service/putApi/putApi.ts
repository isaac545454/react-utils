import { api } from "../../infra/api-client-config";
import { IPut } from "@models/IPut";

export const putApi = async <TResponse>({
  endpoint,
  ...res
}: IPut): Promise<TResponse> => {
  const { data } = await api.put<TResponse>(endpoint, { ...res });

  return data;
};
