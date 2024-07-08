import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';
import { ContactForm } from './contact';

interface LayoutProps {
    children: React.ReactNode;
}

export const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};