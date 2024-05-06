import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/header';
import { Montserrat } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
    title: 'Kasa',
    description: 'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant, Il fait partie des leaders sur le marché avec ses plus de 500 annonces quotidiennes',
    icons: {
        icon: ['/assets/favicon.png']
    }
};

const montserrat = Montserrat({ subsets: ['latin']});

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            
            <body className={montserrat.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
