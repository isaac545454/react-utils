interface Props {
  children: JSX.Element;
}

export const ContainerButtons = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between mt-6">{children}</div>;
};
