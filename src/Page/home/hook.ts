import { AxiosError } from "axios";
import { useGet } from "../../hook/useGet";
import { usePost } from "../../hook/usePost";
import { useTreatmentRequest } from "../../hook/useTreatmentRequest";
import { endpoint } from "../../endipoints";
import { IResponsePost } from "./types";
import { mensagem } from "./mensagem";

export const useHome = () => {
  const { data, isLoading, isError } = useGet<IResponsePost[]>({
    queryKey: ["getPosts"],
    url: endpoint.getPosts,
  });

  const treatmentComponen = useTreatmentRequest({
    data,
    isLoading,
    isError,
    mensagemError: { mensagem: mensagem.error },
    mensagemNotData: { mensagem: mensagem.notData },
  });

  const { mutate } = usePost<
    { id: string },
    AxiosError<unknown>,
    { name: string }
  >({
    url: endpoint.getPosts,
  });

  const handleClick = () => {
    mutate({ name: mensagem.sucess });
  };

  return {
    treatmentComponen,
    data,
    handleClick,
  };
};
