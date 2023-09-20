
import {    ISchema } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, } from 'react-hook-form';
import { schema } from '../schema';
import {   useId, useState } from 'react';
import { endpoint } from '@infra';
import { useHttpMutation } from '../../../hooks';
 
/**
 * @param params params
 * @description  custom hook for home logic
 * @returns  treatmentComponen, data, handleSubmit, register,errors, onSubmit,showModal, setShowModalonChangeModal,}
 * @example  const { data, treatmentComponen, onChangeModal, showModal } = useHome();
 */
export const useHome = () => {
  const [showModal, setShowModal] = useState(true);
  const ID = useId()
 
 
  // const { data, isLoading, isError } = useHttpQuery<IResponsePost[]>({
  //   queryKey: ['getPosts'],
  //   HttpService: { endpoint: endpoint.getPosts  },
  //   options: {enabled: true}
  // });



  const { mutate } = useHttpMutation<{ title: string }, Error, ISchema>({
    HttpService: {
      endpoint: "asssss",
      params:{ label2: "22222"}
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues
  } = useForm<ISchema>({ resolver: zodResolver(schema) });

  const onSubmit = () => {
    mutate({cpf: "aaaaaaaaaaa"})

  };

  const onChangeModal = () => {
    setShowModal(!showModal);
  };

  return {
    ID,
    handleSubmit,
    register,
    errors,
    onSubmit,
    showModal,
    setShowModal,
    onChangeModal,
    control,
    getValues
  };
};
