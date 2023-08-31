import { useGet } from "../../../hook/useGet";
import { usePost } from "../../../hook/usePost";
import { useTreatmentRequest } from "../../../hook/useTreatmentRequest";
import { useEndpoint } from "../../../hook/useEndpoint";
import { IResponsePost, ISchema } from "../types";
import { mensagem } from "../mensagem";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../schema";
import { useState } from "react";

/**
 * @param params params
 * @description  custom hook for home logic
 * @returns  treatmentComponen, data, handleSubmit, register,errors, onSubmit,showModal, setShowModalonChangeModal,}
 * @example  const { data, treatmentComponen, onChangeModal, showModal } = useHome();
 */
export const useHome = () => {
  const [showModal, setShowModal] = useState(false);
  const { getPosts } = useEndpoint();

  const { data, isLoading, isError } = useGet<IResponsePost[]>({
    queryKey: ["getPosts"],
    request: { endpoint: getPosts },
    options: {},
  });

  const treatmentComponen = useTreatmentRequest({
    data,
    isLoading,
    isError,
    mensagemError: { mensagem: mensagem.error },
    mensagemNotData: { mensagem: mensagem.notData },
  });

  const { mutate } = usePost<{ title: string }, Error, ISchema>({
    req: {
      url: getPosts,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: ISchema) => {
    mutate(data);
  };

  const onChangeModal = () => {
    setShowModal(!showModal);
  };

  return {
    treatmentComponen,
    data,
    handleSubmit,
    register,
    errors,
    onSubmit,
    showModal,
    setShowModal,
    onChangeModal,
  };
};
