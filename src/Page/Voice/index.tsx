import { useRef } from "react";
import { Input } from "../../components/Input";

export default function Voice() {
  const value = useRef<null | { value: string }>(null);

  const handleVoice = () => {
    if (value.current === null) return;

    const utterance = new SpeechSynthesisUtterance(value.current.value);
    utterance.lang = "pt-BR";
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.rate = 1;

    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Input ref={value} />
      <button onClick={handleVoice}>falar</button>
    </div>
  );
}
