import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

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
// END PAGES

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutWithNav />}>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
