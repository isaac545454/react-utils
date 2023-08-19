import { deleteApi } from "../service/deleteApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IMutate<TData, TError> {
  options?: MutationOptions<TData, TError>;
  url: string;
}

export const useDelete = <TData, TError>({
  options,
  url,
}: IMutate<TData, TError>): UseMutationResult<TData, TError, void, unknown> => {
  const mutation = useMutation<TData, TError>(
    () => deleteApi<TData>({ url }),
    options
  );

  return mutation;
};
