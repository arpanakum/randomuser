import React, {useState,useEffect,useMemo} from 'react';
import './App.css';
import User from './User'

function App() {

  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setData(users));
  }, [])

 const memoUser = useMemo(() => {
    return <User userData={data}></User>
  },[data])

  const handleIncrement = () => {
    setCount(prevCount => prevCount+1);
  }

  
  return (
    <div className="App">
      <h1> Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <h2>Random Users</h2>
      {memoUser}
    </div>
  );
}

export default App;
