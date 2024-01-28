import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

export default routes;
