import React, { useState, useEffect, useRef,useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ResetButton from './ResetButton';
import {saveUser} from '../actions/actions'

function InputUser(props) {
   // const [name, setName] = useState('');
    const nameRef = useRef('');
    const dispatch = useDispatch();
    const userName = useSelector(state => state.setUser.user);
    
    useEffect(() => {
        nameRef.current.focus();
    }, [])

   /*const handleReset = useCallback(() => {
        console.log('reset user name');
    },[]);*/

    const handleSave = (e) => {
        e.preventDefault();
       
    }

    return (
        <div style={{marginTop: '20px'}}>
            <form onSubmit={handleSave}>
                <input type="text" onChange={(e) => dispatch(saveUser(e.target.value))} placeholder="Enter your name" ref={nameRef} value={userName}></input>
                <p>My name is {userName}</p>
                <ResetButton handleReset={(e) => dispatch(saveUser(''))}>Reset Input</ResetButton>
                <input style={{margin: '10px'}} type="submit" value="Save"/>
            </form>
        </div>
    )
}

export default React.memo(InputUser);