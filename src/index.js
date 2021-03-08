import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { setCounter,setUser } from "./reducers/reducers";

const logger = createLogger();
const rootReducers = combineReducers({setCounter,setUser});
const store= createStore(rootReducers,applyMiddleware(logger));
ReactDOM.render(  
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);