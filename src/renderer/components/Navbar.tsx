import React from 'react';
import '../index.css'

export default function Navbar(){    
    return (
        <nav className="flex flex-row justify-around w-screen h-[10%] bg-black p-3 absolute">
            <img src="../assets/logo-white.png" alt="" id="logo" className="w-[150px]"/>
        </nav>
    );
}