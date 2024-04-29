import Image from 'next/image';
import logo from '@/public/assets/logo-white.png';

export const Footer = () => {
    return (
        <footer className='flex justify-center bg-black text-white px-8 py-28'>
            <div className='flex flex-col text-center items-center'>
                <Image width={110} height={45} src={logo} alt='kasa blanc' className='mb-4'/>
                <p className='text-xs md:text-xl'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};