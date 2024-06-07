import React from "react";

import { LoginPage } from "./pages/loginPage/LoginPage";

import "./App.css";
import { MobileSideBar } from "./components/moleclues/sideBar/mobileSideBar/MobileSideBar";

export const App = () => {
  return (
    <>
      <LoginPage />
      <MobileSideBar />
    </>
  );
};
