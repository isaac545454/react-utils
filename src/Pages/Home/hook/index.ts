import { useGet, usePost, useTreatmentRequest } from "@hooks";
import { endpoint } from "../../../endpoint";
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
  const [showModal, setShowModal] = useState(true);

  const { data, isLoading, isError } = useGet<IResponsePost[]>({
    queryKey: ["getPosts"],
    request: { endpoint: endpoint.getPosts },
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
      url: endpoint.getPosts,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ISchema>({ resolver: zodResolver(schema) });

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
    control,
  };
};