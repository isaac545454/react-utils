import { HttpProps } from "@models/HttpProps";
import { MutationOptions } from "@tanstack/react-query";

export interface IPostMutation<TData, TError, TRequest> {
    options?: MutationOptions<TData, TError, TRequest>;
    HttpService: HttpProps
  }
  
export type TRequestProps<T> =  T & {
    params?: object
}