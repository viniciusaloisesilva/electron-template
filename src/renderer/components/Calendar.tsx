import React from "react";
import { useState } from "react";
import '../index.css';

import Switch from 'react-switch';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Button from "./Button";

import { formatDate } from 'date-fns'

export default function Container() {

    type Value = Date | null;
    type DateObj = Value | [Value, Value];

    const [value, setValue] = useState<DateObj>(new Date());
    const [rangeBool, setRangeBool] = useState<boolean>(false);

    const toggleSelection = () => setRangeBool(!rangeBool);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            
            <div className="w-80 flex flex-row justify-around items-center p-4 m-5 rounded-full border-2 border-black-700"> 
                <span className="tracking-wider">Seleção de Intervalo</span>
                <Switch onChange={toggleSelection} checked={rangeBool} />
            </div>
            
            <Calendar 
                className={'rounded-md p-2 m-3'}
                value={value}
                selectRange={rangeBool}
                onChange={setValue}
            />

            <Button value={value} rangeBool={rangeBool}/>
        </div>
    );
}