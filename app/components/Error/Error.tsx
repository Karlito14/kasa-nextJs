import Link from 'next/link';

export const Error = () => {
    return (
        <main className='flex flex-col items-center text-center'>
            <h2 className='text-[#FF6060] text-7xl text-[280px] mt-20 md:mt-8'>404</h2>
            <p className='text-[#FF6060] mt-20 md:mt-8 text-2xl md:text-4xl'>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link href='/' className='my-20 md:m-12 text-black underline font-medium'>Retourner sur la page d’accueil</Link>
        </main>
    );
};
