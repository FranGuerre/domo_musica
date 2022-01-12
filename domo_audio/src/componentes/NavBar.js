import React from "react";

export default function NavBar () {
    return (
        <>
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h2>Domo Audio</h2>
                </div>
                
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </nav>
        </div>        
        </>
    )
}