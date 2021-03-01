import React from 'react';

export default function Header(props){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="nav-link" href="/list">User List</a> | 
            <a className="nav-link" href="/input">New User</a> | 
            <a className="nav-link" href="">Extras</a>
        </nav>
    )
}