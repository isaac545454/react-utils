import { HttpProps } from "@models/HttpProps";
import { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export interface IGetMutation<TData, TError> {
    queryKey: QueryKey;
    options?: UseQueryOptions<TData, TError>;
    HttpService: HttpProps;
  }