import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaRegWindowClose } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header
            className="absolute top-0 w-full z-10 h-24 flex items-center justify-center pb-4"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link to='/'>
                    <h1 className='text-4xl font-semibold'>Ibanez<span className='text-emerald-400'>.</span> </h1>
                </Link>
                <div className='hidden md:flex'>
                    <nav className="flex items-center sm:gap-10 gap-2">
                        <Link
                            to='/'
                            className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400'
                            activeClassName="text-gray-50"
                        >
                            <span className="text-emerald-400">#</span>
                            Home
                        </Link>
                        <Link
                            to='/projects'
                            className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400'
                            activeClassName="text-gray-50"
                        >
                            <span className="text-emerald-400">#</span>
                            Projetos
                        </Link>
                        <Link
                            to='/contact'
                            className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400'
                            activeClassName="text-gray-50"
                        >
                            <span className="text-emerald-400">#</span>
                            Contato
                        </Link>
                    </nav>
                </div>

                <button onClick={toggleMenu} className="md:hidden z-20 relative">
                    {isOpen ? (
                        <FaRegWindowClose className='text-3xl text-emerald-400 hover:text-gray-300' />
                    ) : (
                        <RiMenu3Fill  className='text-3xl text-emerald-400 hover:text-gray-300' />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    className='fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <nav className="flex flex-col items-start gap-4">
                        <Link
                            to='/'
                            className='text-gray-400 text-3xl font-mono hover:text-emerald-400'
                            activeClassName="text-gray-50"
                            onClick={toggleMenu}
                        >
                            <span className="text-emerald-400"># </span>
                            Home
                        </Link>
                        <Link
                            to='/projects'
                            className='text-gray-400 text-3xl font-mono hover:text-emerald-400'
                            activeClassName="text-gray-50"
                            onClick={toggleMenu}
                        >   
                            <span className="text-emerald-400"># </span>
                            Projetos
                        </Link>
                        <Link
                            to='/contact'
                            className='text-gray-400 text-3xl font-mono hover:text-emerald-400'
                            activeClassName="text-gray-50"
                            onClick={toggleMenu}
                        >
                            <span className="text-emerald-400"># </span>
                            Contato
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};
