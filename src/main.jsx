import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "./store";
import App from "./App";
import Theme from "@styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
