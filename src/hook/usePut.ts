import { putApi } from "../service/putApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IPut<TData, TError, TVariables> {
  options?: MutationOptions<TData, TError, TVariables>;
  url: string;
}

export const usePut = <TData, TError, TVariables>({
  options,
  url,
}: IPut<TData, TError, TVariables>): UseMutationResult<
  TData,
  TError,
  TVariables
> => {
  const mutation = useMutation<TData, TError, TVariables>(
    (variables) => putApi<TData, TVariables>({ url, bodyData: variables }),
    options
  );

  return mutation;
};
