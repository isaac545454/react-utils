import { Header, Footer } from "@components";
import { TemplateProps } from "./types";

export const Template = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
