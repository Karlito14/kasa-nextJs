import { FaStar } from 'react-icons/fa';
import style from './style.module.scss';
import Image from 'next/image';

interface Host {
    name: string;
    picture: string;
}

export const Host = (props: { host: Host, rating:string}) => {

    const renderStars = () => {
        const score = +props.rating;
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if(i <= score) {
                stars.push(<FaStar key={i} className='text-lg md:text-2xl' style={{color: '#FF6060'}} />);
            } else {
                stars.push(<FaStar key={i} className='text-lg md:text-2xl' style={{color: '#E3E3E3'}} />);
            }
        }

        return stars;
    };

    return (
        <div className='flex flex-row-reverse justify-between items-center md:flex-col md:justify-normal'>
            <div className='flex items-center'>
                <h3 className='text-[#FF6060] mr-2 text-sm md:text-base'>{props.host.name}</h3>
                <Image className='rounded-full md:w-16' src={props.host.picture} alt='' width={40} height={40} />
            </div>
            <div className='flex my-5 justify-evenly space-x-2'>
                {renderStars()}
            </div>
        </div>
    );
};

