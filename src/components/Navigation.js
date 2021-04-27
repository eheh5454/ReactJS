import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

// 새로고침 하지않고 이동 
function Navigation() {
    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;