import { useRef } from "react";
import { Input } from "@components";

export function TestInput() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleVoice = () => {
    if (email === null || password === null) return;
    console.log(email.current?.value, password.current?.value);
  };

  return (
    <div>
      <Input.Text ref={email} />
      <Input.Text ref={password} />
      <button onClick={handleVoice}>falar</button>
    </div>
  );
}
