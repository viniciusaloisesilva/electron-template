import React from 'react';
import '../index.css'

function api() {
    window.api.test('the message');
}

export default function Navbar(){    
    return (
        <nav className="flex flex-row justify-around w-screen h-[10%] bg-blue-100">
            <h1 className='underline'> Test </h1>
            <button onClick={api}>Button</button> 
        </nav>
    );
}