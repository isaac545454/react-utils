import React from "react";

interface Props {
  children: JSX.Element;
}

export function Container({ children }: Props) {
  return <div>{children}</div>;
}
