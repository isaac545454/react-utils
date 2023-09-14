import { HttpProps } from "../../infra/http-axios-client";
import {
  UseMutationResult,
  useMutation,
  MutationOptions,
} from "@tanstack/react-query";
import { createHttp } from "../../infra";


interface IPostMutation<TData, TError, TRequest> {
  options?: MutationOptions<TData, TError, TRequest>;
  HttpClient: HttpProps;
}

export type TRequestProps<T> =  T & {
  params?: object
  }

/**'
 * Hook personalizado para realizar uma mutação HTTP POST usando o react-query.
 *
 * @template TData - O tipo dos dados de resposta esperados.
 * @template TError - O tipo de erro que pode ocorrer durante a mutação.
 * @template TRequest - O tipo dos dados da solicitação POST.
 *
 * @param {Object} params - Parâmetros do hook.
 * @param {MutationOptions<TData, TError, TRequest>} [params.options] - Opções de configuração para a mutação.
 * @param {HttpProps} HttpClientProps- Dados da solicitação POST.
 *
 * @returns {UseMutationResult<TData, TError, TRequest>} Um objeto contendo os resultados da mutação.
 *
 * @example
 * const { isLoading, isError, isSuccess, mutate } = useHttpMutation({
 *   options: {
 *     // Opções de configuração da mutação (opcional)
 *   },
 *   HttpClient: {
 *     // Dados da solicitação 
 *     // method:POST | PUT | PATH (POST é default)
 *   },
 * });
 */
export const useHttpMutation = <TData, TError, TRequest>({
  options,
  HttpClient,
}: IPostMutation<TData, TError, TRequest>): UseMutationResult<
  TData,
  TError,
  TRequestProps<TRequest>
> => {
  const { http } = createHttp<TData>()
  
  const mutation = useMutation<TData, TError,  TRequestProps<TRequest>>((info) => {
    const {  params, ...data} = info

   return http.exec({ 
    data: data,
    method: "POST", 
    params:  {...params, ...HttpClient.params},
   
  })},
    options
  );

  return mutation;
};
