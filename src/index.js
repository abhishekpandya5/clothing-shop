import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//Provider is a component class we get from react-redux

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
