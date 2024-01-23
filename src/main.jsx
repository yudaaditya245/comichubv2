import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import '@fontsource-variable/signika';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// PAGES
import LayoutWithNav from "./components/layout/LayoutWithNav.jsx";

import Home from "./pages/home/home.jsx";
import Browse from "./pages/browse/Browse.jsx";
import BrowseLayout from "./components/layout/BrowseLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BrowseGroup from "./pages/browse/groups/BrowseGroup.jsx";
// END PAGES

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutWithNav />}>
      <Route path="/" element={<Home />} />

      <Route path="/browse" element={<BrowseLayout />}>
        <Route index element={<Browse />} />
        <Route path=":source" element={<BrowseGroup />} />
      </Route>
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
