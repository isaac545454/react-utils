import { useGet } from "../../hook/useGet";
import { usePost } from "../../hook/usePost";
import { useTreatmentRequest } from "../../hook/useTreatmentRequest";
import { endpoint } from "../../endipoints";
import { IResponsePost, ISchema } from "./types";
import { mensagem } from "./mensagem";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useState } from "react";

export const useHome = () => {
  const [showModal, setShowModal] = useState(true);

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

  const { mutate } = usePost<{ title: string }, unknown, ISchema>({
    req: {
      url: endpoint.getPosts,
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
