import { deleteApi, IDelete } from "../service/deleteApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IMutate<TData, TError> {
  options?: MutationOptions<TData, TError>;
  req: IDelete;
}

export const useDelete = <TData, TError>({
  options,
  req,
}: IMutate<TData, TError>): UseMutationResult<TData, TError, void, unknown> => {
  const mutation = useMutation<TData, TError>(
    () => deleteApi<TData>(req),
    options
  );

  return mutation;
};
