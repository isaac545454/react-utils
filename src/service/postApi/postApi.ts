import { api } from "../api";
import { IPost } from "@models";

export const postApi = async <TResponse>({
  ...res
}: IPost): Promise<TResponse> => {
  const response = await api<TResponse>({
    method: "POST",
    ...res,
  });

  return response.data;
};
