import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
