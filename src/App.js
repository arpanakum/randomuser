import React, {useState,useEffect,useMemo,useRef} from 'react';
import './App.css';
import User from './components/User'
import InputUser from './components/InputUser'

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

 const memoUser = useMemo(() => {
    return <User userData={data}></User>
  },[data])

  const handleIncrement = () => {
    setCount(prevCount => prevCount+1);
  }
    
  return (
    <div className="App">
      <p>Screen Width:{screenWidth}</p>
      <h1> Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <br/>
      <InputUser></InputUser>
      {memoUser}
    </div>
  );
}

export default App;
