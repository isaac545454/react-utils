import { useState } from "react";
import Ternary from "../../components/Ternary";
import R_IF_component from "./components/R_IF";
import R_ELSE_Component from "./components/R_ELSE";

export default function PageTest() {
  const [state, setState] = useState("name");

  return (
    <div>
      <Ternary
        codition={state == "name"}
        R_if={<R_IF_component />}
        R_else={<R_ELSE_Component />}
      />
      <>
        <>
          {state === "name" ? (
            <div>
              <div>IF_component</div>
            </div>
          ) : (
            <div>
              <div>ELSE_component</div>
            </div>
          )}
        </>
      </>
    </div>
  );
}
