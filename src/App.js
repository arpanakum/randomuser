import React, {useState,useEffect,useMemo,useRef} from 'react';
import './App.css';
import UserList from './components/UserList'
import InputUser from './components/InputUser'
import Header from './components/Header';
import Extras from './components/Extras'

function App() {

  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  const [screenWidth,setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setData(users));

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  function handleResize(){
    setWidth(window.innerWidth);
  }

 /*const memoUser = useMemo(() => {
    return <UserList userData={data}></UserList>
  },[data])*/

  const handleIncrement = () => {
    setCount(prevCount => prevCount+1);
  }
    
  return (
    <div className="App">
      <Header></Header>
      <Extras screenWidth={screenWidth} count={count} handleIncrement={handleIncrement}/>
      <br/>
      <InputUser></InputUser>
      <UserList userData={data}></UserList>
    </div>
  );
}

export default App;
