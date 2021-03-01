import React from 'react';

export default function Extras(props){
 return (
     <>
    <p>Screen Width:{props.screenWidth}</p>
    <h1> Counter: {props.count}</h1>
    <button onClick={props.handleIncrement}>+</button>
    </>
 )
}