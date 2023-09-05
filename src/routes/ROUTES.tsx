import { createBrowserRouter } from "react-router-dom";
import { Template } from "@template";
import { Grid, Home, Voice } from "@pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
