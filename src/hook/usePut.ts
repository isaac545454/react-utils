import { putApi } from "../service/putApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IPut<TData, TError, TRequest> {
  options?: MutationOptions<TData, TError, TRequest>;
  url: string;
}

export const usePut = <TData, TError, TRequest>({
  options,
  url,
}: IPut<TData, TError, TRequest>): UseMutationResult<
  TData,
  TError,
  TRequest
> => {
  const mutation = useMutation<TData, TError, TRequest>(
    (variables) => putApi<TData, TRequest>({ url, bodyData: variables }),
    options
  );

  return mutation;
};
