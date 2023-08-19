import { postApi } from "../service/postApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IPot<TData, TError, TVariables> {
  options?: MutationOptions<TData, TError, TVariables>;
  url: string;
}

export const usePost = <TData, TError, TVariables>({
  options,
  url,
}: IPot<TData, TError, TVariables>): UseMutationResult<
  TData,
  TError,
  TVariables
> => {
  const mutation = useMutation<TData, TError, TVariables>(
    (variables) => postApi<TData, TVariables>({ url, bodyData: variables }),
    options
  );

  return mutation;
};
