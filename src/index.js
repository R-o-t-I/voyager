import "core-js/es6/map";
import "core-js/es6/set";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Router from "@reyzitwo/react-router-vkminiapps";
import structure from "./structure";
import App from "./App";

import "@vkontakte/vkui/dist/vkui.css";
import "@vkontakte/vkui/dist/unstable.css";
import "./css/main.css";
import { AdaptivityProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

const axios = require("axios");

axios.defaults.baseURL = "https://traveler-api.evgrg.xyz/";
axios.defaults.headers.common["xvk"] = window.location.search.replace("?", "");
// axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczNzAyNzkyfQ.yHAeZTBMW8t5O2cWGW0rCVuce_Qlm1loQn3grQbN8OE"

bridge.send("VKWebAppInit", {});

ReactDOM.render(
  <Provider store={store}>
    <AdaptivityProvider>
      <Router structure={structure}>
        <App />
      </Router>
    </AdaptivityProvider>
  </Provider>,
  document.getElementById("root")
);

import("./eruda.js").then(({ default: eruda }) => {});
