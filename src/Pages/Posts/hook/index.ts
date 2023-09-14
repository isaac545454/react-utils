import { useFetchData } from "../../../hooks/index";
import { endpoint } from "../../../endpoint";
import { IResponsePost } from "../../Home/types";



export const usePost = () => {

  const { data, isLoading, isError } = useFetchData<IResponsePost[]>({
    queryKey: ["getPosts"],
    request: { endpoint: endpoint.getPosts },
  });

  return {
    isLoading,
    isError,
    data,
  };
};
