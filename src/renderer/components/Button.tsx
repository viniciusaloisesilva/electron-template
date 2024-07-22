import React from 'react';
import '../index.css'

interface ButtonProps {
    value: any;
    rangeBool: boolean;
}

export default function Button({value, rangeBool}: ButtonProps) {

    async function getDirectory() {
        const folderPath = await (window as any).directoryApi.requestDirectory();
        console.log(folderPath);
    }

    function getDate(rangeBool:boolean){
        if (rangeBool){
            const dateArr: string[] = Object.keys(value).map(key => value[key].toISOString().slice(0, 10));
            console.log(dateArr);

        } else {
            const dateStr:string =  value.toISOString().slice(0, 10);
            console.log(dateStr);
        };
    }

    const handleClick = async (rangeBool: boolean) => {
        await getDirectory();
        getDate(rangeBool);
    }

    return (
        <button onClick={() => handleClick(rangeBool)}
        className="w-28 bg-[#fcae03] text-black p-3 m-5 rounded-full
        hover:scale-110 duration-75">
            Gerar
        </button>
    );
}