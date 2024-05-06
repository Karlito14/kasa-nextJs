import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/header';
import { Montserrat } from 'next/font/google';
import './globals.css';

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
