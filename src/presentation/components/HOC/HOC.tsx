import { Error } from "../Error";
import { Loading } from "../Loading";

export interface withErrorAndLoadingHandlingProps {
  isLoading: boolean;
  isError: boolean;
}

export function withErrorAndLoadingHandling<
  P extends withErrorAndLoadingHandlingProps
>(WrappedComponent: React.ComponentType<P>) {
  const WithLoading: React.FC<P> = (props) => {
    const { isLoading, isError, ...restProps } =
      props as withErrorAndLoadingHandlingProps;

    if (isLoading) return <Loading />;
    if (isError) return <Error mensagem="error" />;

    return <WrappedComponent {...(restProps as P)} />;
  };

  return WithLoading;
}
