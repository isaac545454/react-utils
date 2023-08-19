import { postApi } from "../service/postApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IPost<TData, TError, TRequest> {
  options?: MutationOptions<TData, TError, TRequest>;
  url: string;
}

export const usePost = <TData, TError, TRequest>({
  options,
  url,
}: IPost<TData, TError, TRequest>): UseMutationResult<
  TData,
  TError,
  TRequest
> => {
  const mutation = useMutation<TData, TError, TRequest>(
    (variables) => postApi<TData, TRequest>({ url, bodyData: variables }),
    options
  );

  return mutation;
};
