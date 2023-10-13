 

type Props = {
   mensagem: string
}

export function Error({ mensagem }: Props) {
  return (
    <div role="ErrorMessage"  >
      {mensagem}
    </div>
  );
}
