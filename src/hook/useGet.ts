import { getApi, IGet } from "../service/getApi";
import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";

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
