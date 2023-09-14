import { useHttpMutation ,useHttpQuery } from '../../../hooks/index';
import { endpoint } from '../../../endpoint';
import { IResponsePost, ISchema } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, } from 'react-hook-form';
import { schema } from '../schema';
import { useId, useState } from 'react';

/**
 * @param params params
 * @description  custom hook for home logic
 * @returns  treatmentComponen, data, handleSubmit, register,errors, onSubmit,showModal, setShowModalonChangeModal,}
 * @example  const { data, treatmentComponen, onChangeModal, showModal } = useHome();
 */
export const useHome = () => {
  const [showModal, setShowModal] = useState(true);
  const ID = useId();
 
  const { data, isLoading, isError } = useHttpQuery<IResponsePost[]>({
    queryKey: ['getPosts'],
    request: { endpoint: endpoint.getPosts  },
    options: {enabled: true}
  });

 

  const { mutate } = useHttpMutation <{ title: string }, Error, ISchema>({
    HttpClient: {
      url: endpoint.getPosts,
      params:{ label2: "22222"}
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ISchema>({ resolver: zodResolver(schema) });

  const onSubmit = () => {
    mutate({cpf: "aaaaaaaaaaa", password:"222222222",
    select1:  {label: "aaaaa", value: "111111"},
    select2: {label: "aaaaaaaaa", value: "111111"},
    params: {
      label: "aaqaaa"
    }})

  };

  const onChangeModal = () => {
    setShowModal(!showModal);
  };

  return {
    data,
    handleSubmit,
    register,
    errors,
    onSubmit,
    showModal,
    setShowModal,
    onChangeModal,
    control,
    isLoading,
    isError,
    ID
  };
};
