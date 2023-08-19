import { getApi } from "../service/getApi";
import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";

interface IGet<TData, TError> {
  queryKey: QueryKey;
  options?: UseQueryOptions<TData, TError>;
  url: string;
}

export const useGet = <TData, TError = unknown>({
  queryKey,
  options,
  url,
}: IGet<TData, TError>): UseQueryResult<TData, TError> => {
  const data = useQuery(queryKey, () => getApi<TData>({ url: url }), options);

  return data;
};
