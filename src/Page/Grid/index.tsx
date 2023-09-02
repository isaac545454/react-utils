import { GridInput } from "../../components/GridInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Grid() {
  return (
    <div>
      <GridInput
        name={<Input />}
        email={<Input />}
        description={<Input />}
        data={<Input />}
        buttonSucess={<Button>oi</Button>}
      />
    </div>
  );
}
