import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/logo.png';
import './Header.css';
export default function Header() {
    return (
        <>
            <div className="header">
                <span className="logo">
                    <img src={logo} alt="Keyboard logo"/>
                    <h1>swiftkeys</h1>
                </span>
                <span className="icons">
                    <i className="fas fa-keyboard"/>
                    <i className="fas fa-cog"/>
                </span>
            </div>
        </>
    )
}