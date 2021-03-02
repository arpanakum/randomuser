import React, {useState,useEffect,useMemo,useRef} from 'react';
import './App.css';
import UserList from './components/UserList'
import InputUser from './components/InputUser'
import Header from './components/Header';
import Extras from './components/Extras'
import { Route, Switch } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Route path="/" exact component={Extras}/>
      <Route path="/input" component={InputUser}/>
      <Route path="/list" component={UserList}/>
    </div>
  );
}

export default App;
