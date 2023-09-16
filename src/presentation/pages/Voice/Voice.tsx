import { useRef } from "react";
import * as Input from "../../components/Input";

export function Voice() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handle = () => {
    if (email === null || password === null) return;
    console.log(email.current?.value, password.current?.value);
  };

  return (
    <div>
      <Input.Text ref={email} />
      <Input.Text ref={password} />
      <button onClick={handle}>enviar</button>
    </div>
  );
}
