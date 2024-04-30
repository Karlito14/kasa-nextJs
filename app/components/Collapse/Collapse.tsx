'use client';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Equipement, Rule } from './types';

export const Collapse = (props : { object : Rule | Equipement}) => {
    const [displayContent, setDisplayContent] = useState(false);

    const renderContent = () => {
        if(typeof props.object.content === 'string') {
            return <p className='content-collapse'>{props.object.content}</p>;
        } else {
            const list: React.JSX.Element[] = [];

            props.object.content.map((item: string, index: number) => {
                list.push(<li className='content-collapse' key={`${index}-${item}`}>{item}</li>);
            });

            return <ul className='px-3 py-5'>{list}</ul>;
        }
    };

    return (
        <li className='w-full mb-4 md:w-11/12'>
            <h3 className='flex justify-between text-white bg-[#FF6060] text-lg rounded py-2 px-4'>
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