export default function Error({ mensagem }: { mensagem: string }) {
  return <div role="ErrorMessage">{mensagem}</div>;
}
