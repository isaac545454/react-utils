import { getApi } from "@services";
import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";
import { IGet } from "@models/IGet";

interface IGetMutation<TData, TError> {
  queryKey: QueryKey;
  options?: UseQueryOptions<TData, TError>;
  request: IGet;
}

export const useGet = <TData, TError = unknown>({
  queryKey,
  options,
  request,
}: IGetMutation<TData, TError>): UseQueryResult<TData, TError> => {
  const data = useQuery(queryKey, () => getApi<TData>({ ...request }), options);

  return data;
};
