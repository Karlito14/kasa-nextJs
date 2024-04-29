import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/LOGO.png';

export const Header = () => {

    return (
        <header className='flex justify-between items-center p-5 md:p-11'>
            <Image width={110} height={45} src={logo} alt='Kasa' className='object-contain mr-4' />
            <nav>
                <Link 
                    className='font-medium mr-4 md:mr-7 text-sm md:text-xl' 
                    href='/' 
                >Accueil</Link>
                <Link 
                    className='font-medium text-sm md:text-xl'
                    href='/about'
                >A propos</Link>
            </nav>
        </header>
    );
};