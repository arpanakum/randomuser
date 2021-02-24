import React,{useState,useEffect,useRef} from 'react';

export default function InputUser() {
    const [name, SetName] = useState('');
    const nameRef = useRef('');

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleInputChange = (e) => {
        SetName(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} placeholder="Enter your name" ref={nameRef}></input>
            <p>My name is {name}</p>
        </div>
    )
}