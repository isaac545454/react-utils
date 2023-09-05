import { api } from "./api";
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
