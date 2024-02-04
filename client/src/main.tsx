import "./dtr/adaptor/managers/style/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import HomeView from "./views/home/Home.view";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>
);
