import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as store from "./mobx";
import Routes from "./routes";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { router } from "./mobx/";
import { Router } from "react-router-dom";
import { syncHistoryWithStore } from "mobx-react-router";
import Notifications from "react-notify-toast";
import 'bootstrap/dist/css/bootstrap.min.css';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <>
        <Router history={history}>
          <Routes />
        </Router>
        <Notifications />
      </>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
