import { RouterProvider } from "react-router-dom";
import { router } from "@routes";
import { Template } from "@template";

function App() {
  return (
    <Template>
      <RouterProvider router={router} />
    </Template>
  );
}

export default App;
