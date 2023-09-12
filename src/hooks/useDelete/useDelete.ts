import { IDelete } from "@models/IDelete";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";
import { createAxios } from "../../infra";

interface IMutate<TData, TError> {
  options?: MutationOptions<TData, TError>;
  res: IDelete;
}

export const useDelete = <TData, TError>({
  options,
  res,
}: IMutate<TData, TError>): UseMutationResult<TData, TError, void, unknown> => {
  const { http } = createAxios<TData>()
  const mutation = useMutation<TData, TError>(
    () => http.exec({ ...res, method: "DELETE" }),
    options
  );

  return mutation;
};
