import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/header';
import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
