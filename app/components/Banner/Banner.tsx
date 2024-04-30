import { StaticImageData } from 'next/image';

interface Banner {
    img: StaticImageData;
    text?: string;
}

export const Banner = (props : Banner) => {
    return (
        <div className='container-banner md:h-56 md:justify-center md:mx-8' style={{backgroundImage: `url(${props.img})`}}>
            {props.text && <h1 className='text-white text-xl z-10 md:text-6xl'>{props.text}</h1>}
        </div>
    );
};