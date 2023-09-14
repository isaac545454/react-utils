import { useCreateOrUpdate, useFetchData} from '../../../hooks/index';
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
 
  const { data, isLoading, isError } = useFetchData<IResponsePost[]>({
    queryKey: ['getPosts'],
    request: { endpoint: endpoint.getPosts  },
    options: {enabled: true}
  });

 

  const { mutate } = useCreateOrUpdate<{ title: string }, Error, ISchema>({
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

  const onSubmit = () => {
    mutate({
      cpf: "aaaaaaaaaa",
      password: "aaaaaaaaaa",
      select1: { label: "aa", value: "aaaa" },
      select2: { label: "aa", value: "aaaa" }
    })

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
