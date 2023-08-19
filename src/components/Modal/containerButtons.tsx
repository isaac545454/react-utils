import React from "react";

interface Props {
  children: JSX.Element;
}

export function ContainerButtons({ children }: Props) {
  return <div>{children}</div>;
}
