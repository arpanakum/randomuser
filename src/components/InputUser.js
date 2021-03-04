import React, { useState, useEffect, useRef,useCallback } from 'react';
import ResetButton from './ResetButton';

function InputUser() {
    const [name, setName] = useState('');
    const nameRef = useRef('');

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleReset = useCallback(() => {
        setName('');
    },[]);

    const handleSave = (e) => {
        e.preventDefault();
        if(name !== '')
            alert("New User is saved!")
        else
            alert("Please enter User name")
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                <input type="text" onChange={handleInputChange} placeholder="Enter your name" ref={nameRef} value={name}></input>
                <p>My name is {name}</p>
                <ResetButton handleReset={handleReset}>Reset Input</ResetButton>
                <input type="submit" onClick={handleSave} value="Save"/>
            </form>
        </div>
    )
}

export default React.memo(InputUser);