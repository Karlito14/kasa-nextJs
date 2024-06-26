'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/LOGO.png';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathName = usePathname();

    return (
        <header className='flex justify-between items-center p-5 md:p-11'>
            <Image width={110} height={45} src={logo} alt='Kasa' className='object-contain mr-4' />
            <nav>
                <ul className='flex'>
                    <li>
                        <Link 
                            className='font-medium mr-4 md:mr-7 text-sm md:text-xl' 
                            href='/' 
                            style={{textDecoration: pathName === '/' ? 'underline' : ''}}
                        >Accueil</Link>
                    </li>
                    <li>
                        <Link 
                            className='font-medium text-sm md:text-xl' 
                            href='/PageAbout' 
                            style={{textDecoration: pathName === '/PageAbout' ? 'underline' : ''}}
                        >A propos</Link>
                    </li>
                </ul>
                
                
            </nav>
        </header>
    );
};