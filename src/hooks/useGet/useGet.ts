import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";
import { IGet } from "@models/IGet";
import { createHttp } from "../../infra/http-axios-client";

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
  const { http } = createHttp<TData>()
  const data = useQuery(queryKey, () => http.exec({
    ...request, method: "GET",
  }), options);
  return data;
};
