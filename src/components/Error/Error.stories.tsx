import Error from ".";

export default {
  title: "Components/Error",
  component: Error,
};

export const Primary = () => <Error mensagem="error" />;
Primary.args = {
  mensagem: "ERRO",
};
