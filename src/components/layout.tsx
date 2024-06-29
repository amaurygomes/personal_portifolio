import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main >
            <Header />
            {children}
            <Footer/>
        </main>
    );
};