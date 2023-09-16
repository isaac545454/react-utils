import { useHttpQuery } from "../../../hooks/index";
import { endpoint } from "../../../infra";
import { IResponsePost } from "../../Home/types";

export const usePost = () => {
  const { data, isLoading, isError } = useHttpQuery<IResponsePost[]>({
    queryKey: ["getPosts"],
    request: { endpoint: endpoint.getPosts },
  });

  return {
    isLoading,
    isError,
    data,
  };
};
