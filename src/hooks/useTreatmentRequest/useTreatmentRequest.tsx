import { ComponentProps } from "react";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { NotData } from "../../components/NotData";

interface Itreatment {
  isLoading: boolean;
  isError: boolean;
  data: Array<unknown> | undefined;
  mensagemError: ComponentProps<typeof Error>;
  mensagemNotData: ComponentProps<typeof NotData>;
}

export const useTreatmentRequest = ({
  isLoading,
  isError,
  data,
  mensagemError,
  mensagemNotData,
}: Itreatment): JSX.Element | undefined => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error {...mensagemError} />;
  }

  if (data?.length === 0) {
    return <NotData {...mensagemNotData} />;
  }
};
