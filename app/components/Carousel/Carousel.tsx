'use client';
import { useState } from 'react';
import style from './style.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

export const CarouselHouse = (props : { pictures: string[], title: string }) => {
    const [indexImage, setIndexImage] = useState(0);

    const incrIndex = () => {
        let newIndex = indexImage + 1;
        if(newIndex > props.pictures.length - 1) {
            newIndex = 0;
        }
        setIndexImage(newIndex);
    };

    const decrIndex = () => {
        let newIndex = indexImage - 1;
        if(newIndex < 0) {
            newIndex = props.pictures.length - 1;
        }
        setIndexImage(newIndex);
    };

    return (
        <div className='relative'>
            {props.pictures.length > 1 && <IoIosArrowBack className='text-white text-2xl md:text-7xl absolute cursor-pointer -translate-y-1/2 top-1/2 left-2' onClick={() => decrIndex()} />}
            <Image src={props.pictures[indexImage]} alt={props.title} width={0} height={255} style={{ width: '100%'}} className='object-cover rounded-3xl md:h-96' />
            {props.pictures.length > 1 && <span className='absolute bottom-5 -translate-x-1/2 left-1/2 text-xl font-medium text-white hidden md:block'>{indexImage + 1}/{props.pictures.length}</span>}
            {props.pictures.length > 1 && <IoIosArrowForward className='text-white text-2xl md:text-7xl absolute cursor-pointer -translate-y-1/2 top-1/2 right-2' onClick={() => incrIndex()} />}
        </div>
    );
};
