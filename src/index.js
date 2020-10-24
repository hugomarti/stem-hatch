import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import breakpoints from "./theme/breakpoints";
import colors from "./theme/colors";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1A202C",
        color: "white",
      },
    },
  },
  breakpoints,
  colors,
});

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
