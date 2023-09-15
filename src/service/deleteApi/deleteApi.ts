import { api } from "../../infra/api-client-config";
import { IDelete } from "@models";

export const deleteApi = async <TResponse>({
  ...res
}: IDelete): Promise<TResponse> => {
  const response = await api<TResponse>({
    method: "delete",
    ...res,
  });

  return response.data;
};
