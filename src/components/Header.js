import React from 'react';
import { Link } from "react-router-dom";

export default function Header(props){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="nav-link" to="/list">User List</Link> | 
            <Link className="nav-link" to="/input">New User</Link> | 
            <Link className="nav-link" to="/">Extras</Link>
        </nav>
    )
}