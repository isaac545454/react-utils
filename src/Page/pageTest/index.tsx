import { useState } from "react";
import Ternary from "../../components/Ternary";
import R_IF_component from "./components/R_IF";
import R_ELSE_Component from "./components/R_ELSE";

export default function PageTest() {
  const [state, setState] = useState("name");

  return (
    <div>
      <Ternary
        R_if={<R_IF_component />}
        R_else={<R_ELSE_Component />}
        codition={state == "name"}
      />
      <>
        {state === "name" ? (
          <div>
            <div></div>
          </div>
        ) : (
          <div>
            <div></div>
          </div>
        )}
      </>
    </div>
  );
}
