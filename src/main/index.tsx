import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/AppRouter";
import { Template } from "./presentation/template";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import "./presentation/style/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Template>
        <RouterProvider router={router} />
      </Template>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
