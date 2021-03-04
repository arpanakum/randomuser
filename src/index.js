import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { setCounter } from "./reducers/reducers";

const logger = createLogger();
const store= createStore(setCounter,applyMiddleware(logger));
ReactDOM.render(  
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);