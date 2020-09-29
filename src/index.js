import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import App from "./App";

import "./index.css";

const customTheme = {
  ...theme,
  fonts: {
    heading: "Press Start 2P",
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={customTheme}>
            <CSSReset />
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
