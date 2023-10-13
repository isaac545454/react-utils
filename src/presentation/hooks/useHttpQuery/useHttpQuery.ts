import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { IGetMutation } from './types'
import { createHttp } from '../../../infra/Http/HttpClientFactory/create-http-factory'

/**
 * Custom Hook: useHttpQuery
 *
 * O `useHttpQuery` é um custom hook que simplifica a lógica de fazer uma requisição HTTP GET a uma API ou servidor usando a biblioteca `react-query`.
 *
 * @template TData - O tipo dos dados que serão retornados pela requisição.
 * @template TError - O tipo de erro que pode ocorrer na requisição.
 *
 * @param {IGetMutation<TData, TError>} options - Opções de configuração do custom hook.
 * @param {QueryKey} options.queryKey - Uma chave única que identifica a consulta ou recurso a ser buscado. Isso pode ser útil para cache ou invalidação de cache.
 * @param {UseQueryOptions<TData, TError>} [options.options] - Opções adicionais para personalizar o comportamento do `useQuery` da biblioteca `react-query`.
 * @param {HttpProps} options.request - Um objeto de configuração que define os detalhes da requisição HTTP GET.
 * @param {string} options.request.endpoint - O endpoint da API ou URL de onde os dados devem ser buscados.
 * @param {object} [options.request.headers] - Um objeto contendo cabeçalhos HTTP opcionais a serem enviados com a requisição.
 *
 * @returns {UseQueryResult<TData, TError>} - Um objeto do tipo `UseQueryResult` que inclui propriedades como `data`, `isLoading` e `isError` para lidar com o estado da requisição e seus resultados.
 *
 * @example
 * // Exemplo de uso do `useHttpQuery` em um componente React.
 * import React from 'react';
 * import { useHttpQuery  } from './useHttpQuery ';
 *
 * function PostList() {
 *   const { data, isLoading, isError } = useHttpQuery<IResponsePost[]>({
 *     queryKey: ['getPosts'],
 *     request: { endpoint: '/api/posts' },
 *   });
 *
 *   if (isLoading) {
 *     return <p>Carregando...</p>;
 *   }
 *
 *   if (isError) {
 *     return <p>Ocorreu um erro ao buscar os posts.</p>;
 *   }
 *
 *   return (
 *     <div>
 *       <h1>Lista de Posts</h1>
 *       <ul>
 *         {data.map((post) => (
 *           <li key={post.id}>{post.title}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 *
 * export  PostList;
 */
export const useHttpQuery = <TData, TError = unknown>({
	queryKey,
	options,
	HttpService,
}: IGetMutation<TData, TError>): UseQueryResult<TData, TError> => {
	const { http } = createHttp<TData>()
	const data = useQuery(queryKey, () => http.exec({ ...HttpService, method: 'GET' }), options)

	return data
}
