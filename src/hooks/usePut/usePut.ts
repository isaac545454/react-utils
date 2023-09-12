import { IPut } from '@models/IPut'
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";
import { createAxios } from "../../infra";

interface IPutMutate<TData, TError, TRequest> {
  options?: MutationOptions<TData, TError, TRequest>;
  response: IPut

}

export const usePut = <TData, TError, TRequest>({
  options,
  ...req
}: IPutMutate<TData, TError, TRequest>): UseMutationResult<
  TData,
  TError,
  TRequest
> => {
  const { http } = createAxios<TData>()
  const mutation = useMutation<TData, TError, TRequest>(
    (data) => http.exec({ data, ...req, method: "PUT" }),
    options
  );

  return mutation;
};
