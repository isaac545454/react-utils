interface Props {
  children: JSX.Element;
}

export const ContainerButtons = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};
