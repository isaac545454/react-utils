import { postApi, IPost } from "../service/postApi";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";

interface IPostMutation<TData, TError, TRequest> {
  options?: MutationOptions<TData, TError, TRequest>;
  req: IPost;
}

export const usePost = <TData, TError, TRequest>({
  options,
  req,
}: IPostMutation<TData, TError, TRequest>): UseMutationResult<
  TData,
  TError,
  TRequest
> => {
  const mutation = useMutation<TData, TError, TRequest>(
    (data) => postApi<TData>({ data, ...req }),
    options
  );

  return mutation;
};
