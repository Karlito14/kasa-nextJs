'use client';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Equipement, Rule } from './types';

export const Collapse = (props : { object : Rule | Equipement}) => {
    const [displayContent, setDisplayContent] = useState(false);

    const renderContent = () => {
        if(typeof props.object.content === 'string') {
            return <p className='content-collapse h-28 px-4 py-2 -mt-1 overflow-hidden hover:overflow-auto'>{props.object.content}</p>;
        } else {
            const list: React.JSX.Element[] = [];

            props.object.content.map((item: string, index: number) => {
                list.push(<li className='content-collapse py-2 px-4' key={`${index}-${item}`}>{item}</li>);
            });

            return <ul className='-mt-1 h-28 bg-[#F6F6F6] overflow-hidden hover:overflow-auto'>{list}</ul>;
        }
    };

    return (
        <li className='w-full mb-4 md:w-11/12 first:mr-2'>
            <h3 className='flex justify-between items-center text-white bg-[#FF6060] text-lg rounded py-2 px-4'>
                {props.object.title} 
                <IoIosArrowDown 
                    className='transition-all cursor-pointer font-bold' 
                    onClick={()=> setDisplayContent(!displayContent)}
                    style={{transform: !displayContent ? 'rotate(180deg)' : ''}}
                /> 
            </h3>
            {displayContent && renderContent()}
        </li>
    );
};