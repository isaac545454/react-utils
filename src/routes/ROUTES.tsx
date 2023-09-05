import { createBrowserRouter } from "react-router-dom";
import { Grid, Home, Voice } from "@pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/grid",
    element: <Grid />,
  },
  {
    path: "/voice",
    element: <Voice />,
  },
]);
