interface Props {
  children: JSX.Element;
}

export const Container = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};
