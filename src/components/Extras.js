import React,{useState,useEffect} from 'react';

export default function Extras(props){

  const [count,setCount] = useState(0);
  const [screenWidth,setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  function handleResize(){
    setWidth(window.innerWidth);
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount+1);
  }

  return (
     <>
    <p>Screen Width:{screenWidth}</p>
    <h1> Counter: {count}</h1>
    <button onClick={handleIncrement}>+</button>
    </>
 )
}