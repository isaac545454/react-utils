//@ts-nocheck
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import { request } from "./api/axios";
import type { ErrorType } from "./api/axios";
export type PostApiStudentNotes200DataItem = {
  id?: string;
  CODCOLIGADA?: number;
  IDTURMADISC?: number;
  IDPROBLEMA?: number;
  TIPONOTA?: string;
  TIPOETAPA?: string;
  AVALIADOR?: string;
  AVALIADO?: string;
  NOTA?: number;
  USUARIO?: string;
  RESTDS_TEMP_ID?: number;
};

export type PostApiStudentNotes200 = {
  data?: PostApiStudentNotes200DataItem[];
  message?: string;
  status?: number;
};

export type PostApiStudentNotesBodyItem = {
  CODCOLIGADA?: number;
  IDTURMADISC?: number;
  IDPROBLEMA?: number;
  TIPONOTA?: string;
  TIPOETAPA?: string;
  AVALIADOR?: string;
  USUARIO?: string;
  AVALIADO?: string;
  NOTA?: number;
};

export type GetApiStudentNotes200DataItem = {
  CODCOLIGADA?: number;
  CODFILIAL?: number;
  IDPERLET?: number;
  IDHABILITACAOFILIAL?: number;
  IDTURMADISC?: number;
  TIPO?: string;
  CODDISC?: string;
  DISCIPLINA?: string;
  IDPROBLEMA?: number;
  DESCRICAO?: string;
  AVALIADO?: string;
  AVALIADO_NOME?: string;
  NOTA_ABERTURA?: number;
  NOTA_FECHAMENTO?: number;
  TIPONOTA?: string;
};

export type GetApiStudentNotes200 = {
  data?: GetApiStudentNotes200DataItem[];
  message?: string;
  status?: number;
};

export type GetApiStudentNotesParams = {
  /**
   * Período letivo
   */
  IDPERLET: string;
  /**
   * Código RA do aluno
   */
  RA: string;
  /**
   * Módulo selecionado
   */
  MODULO: string;
  /**
   * Código do Problema selecionado
   */
  IDPROBLEMA: string;
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Retorna as notas de tutoria
 */
export const getApiStudentNotes = (
  params: GetApiStudentNotesParams,
  signal?: AbortSignal
) => {
  return request<GetApiStudentNotes200>({
    url: `/api/student/notes`,
    method: "get",
    params,
    signal,
  });
};

export const getGetApiStudentNotesQueryKey = (
  params: GetApiStudentNotesParams
) => [`/api/student/notes`, ...(params ? [params] : [])] as const;

export const getGetApiStudentNotesQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiStudentNotes>>,
  TError = ErrorType<unknown>
>(
  params: GetApiStudentNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiStudentNotes>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getApiStudentNotes>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetApiStudentNotesQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiStudentNotes>>
  > = ({ signal }) => getApiStudentNotes(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetApiStudentNotesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiStudentNotes>>
>;
export type GetApiStudentNotesQueryError = ErrorType<unknown>;

/**
 * @summary Retorna as notas de tutoria
 */
export const useGetApiStudentNotes = <
  TData = Awaited<ReturnType<typeof getApiStudentNotes>>,
  TError = ErrorType<unknown>
>(
  params: GetApiStudentNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiStudentNotes>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetApiStudentNotesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Adiciona na base as notas de tutoria
 */
export const postApiStudentNotes = (
  postApiStudentNotesBodyItem: PostApiStudentNotesBodyItem[]
) => {
  return request<PostApiStudentNotes200>({
    url: `/api/student/notes`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postApiStudentNotesBodyItem,
  });
};

export const getPostApiStudentNotesMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiStudentNotes>>,
    TError,
    { data: PostApiStudentNotesBodyItem[] },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiStudentNotes>>,
  TError,
  { data: PostApiStudentNotesBodyItem[] },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiStudentNotes>>,
    { data: PostApiStudentNotesBodyItem[] }
  > = (props) => {
    const { data } = props ?? {};

    return postApiStudentNotes(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiStudentNotesMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiStudentNotes>>
>;
export type PostApiStudentNotesMutationBody = PostApiStudentNotesBodyItem[];
export type PostApiStudentNotesMutationError = ErrorType<unknown>;

/**
 * @summary Adiciona na base as notas de tutoria
 */
export const usePostApiStudentNotes = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiStudentNotes>>,
    TError,
    { data: PostApiStudentNotesBodyItem[] },
    TContext
  >;
}) => {
  const mutationOptions = getPostApiStudentNotesMutationOptions(options);

  return useMutation(mutationOptions);
};
