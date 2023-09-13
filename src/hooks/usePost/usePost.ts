import { IPost } from "@models/IPost";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";
import { createHttp } from "../../infra";

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
  const { http } = createHttp<TData>()
  const mutation = useMutation<TData, TError, TRequest>(
    (data) => http.exec({ data, ...req, method: "POST" }),
    options
  );

  return mutation;
};
