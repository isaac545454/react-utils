import Loading from "../../src/components/Loading";
import Error from "../../src/components/Error";

interface Itreatment {
  isLoading: boolean;
  isError: boolean;
  data: Array<unknown> | undefined;
  mensagemError: React.ComponentProps<typeof Error>;
}

export const useTreatmentRequest = ({
  isLoading,
  isError,
  data,
  mensagemError,
}: Itreatment): JSX.Element | undefined => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error {...mensagemError} />;
  }

  if (data?.length === 0) {
    return <div />;
  }
};
