import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import { setCounter } from '../reducers/reducers';
import {incrementCounter} from '../actions/actions'

// returns an object
const mapStateToProps = (state) => {
  return {
    count:state.setCounter.counter
  }
} 

// returns a function
const mapDispatchToProps = (dispatch) => {
  return{
    handleIncrement : () => {
      //dispatching increment action
      dispatch(incrementCounter())
    }
  }
}

class Extras extends React.Component{
  
  state = {
    screenWidth:window.innerWidth
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({screenWidth:window.innerWidth})
  }

  render(){
    return (
      <>
     <p>Screen Width:{this.state.screenWidth}</p>
     <h1> Counter: {this.props.count}</h1>
     <button onClick={this.props.handleIncrement}>+</button>
     </>
  )
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Extras);