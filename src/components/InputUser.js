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

    return (
        <div>
            <input type="text" onChange={handleInputChange} placeholder="Enter your name" ref={nameRef} value={name}></input>
            <p>My name is {name}</p>
            <ResetButton handleReset={handleReset}>Reset Input</ResetButton>
        </div>
    )
}

export default React.memo(InputUser);