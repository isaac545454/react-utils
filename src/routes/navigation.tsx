import { createBrowserRouter } from "react-router-dom";
import { Grid } from "../Pages/Grid";
import { Home } from "../Pages/Home";
import { Voice } from "../Pages/Voice";
import { Post } from "../Pages/Posts";
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
  {
    path: ROUTES.POSTS,
    element: <Post />,
  },
]);
