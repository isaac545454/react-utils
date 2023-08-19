import Loading from "../src/components/Loading";
import { toast } from "react-toastify";

interface Itreatment {
  isLoading: boolean;
  isError: boolean;
  data: Array<unknown> | undefined;
  mensagem: string;
}

export const useTreatmentRequest = ({
  isLoading,
  isError,
  data,
  mensagem,
}: Itreatment): JSX.Element | undefined => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(mensagem);
    return <div />;
  }

  if (data === undefined || data.length === 0) {
    return <div />;
  }
};
