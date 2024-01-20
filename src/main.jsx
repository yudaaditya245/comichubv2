import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "../pages/About.jsx";
import LayoutWithNav from "../layout/LayoutWithNav.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutWithNav />}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
