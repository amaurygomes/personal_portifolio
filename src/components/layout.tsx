import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';

interface LayoutProps {
    children: React.ReactNode;
}

export const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main >
            <Header />
            {children}
            <Footer/>
            <BackToTop/>
        </main>
    );
};