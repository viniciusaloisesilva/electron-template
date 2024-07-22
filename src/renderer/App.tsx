    import React from "react";
import './index.css';

import CalendarComponent from "./components/Calendar";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="w-full h-screen bg-slate-100">
            <Navbar />
            <CalendarComponent/>
        </div>
    );
}