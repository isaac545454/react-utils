import { createBrowserRouter } from "react-router-dom";
import { Grid, Home, Voice } from "@pages";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.GRID,
    element: <Grid />,
  },
  {
    path: ROUTES.VOICE,
    element: <Voice />,
  },
]);
