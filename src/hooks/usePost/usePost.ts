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

/**
 * Hook personalizado para realizar uma mutação HTTP POST usando o react-query.
 *
 * @template TData - O tipo dos dados de resposta esperados.
 * @template TError - O tipo de erro que pode ocorrer durante a mutação.
 * @template TRequest - O tipo dos dados da solicitação POST.
 *
 * @param {Object} params - Parâmetros do hook.
 * @param {MutationOptions<TData, TError, TRequest>} [params.options] - Opções de configuração para a mutação.
 * @param {IPost} params.req - Dados da solicitação POST.
 *
 * @returns {UseMutationResult<TData, TError, TRequest>} Um objeto contendo os resultados da mutação.
 *
 * @example
 * const { isLoading, isError, isSuccess, mutate } = usePost({
 *   options: {
 *     // Opções de configuração da mutação (opcional)
 *   },
 *   req: {
 *     // Dados da solicitação POST
 *   },
 * });
 */
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
