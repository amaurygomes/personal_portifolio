import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'gatsby';


export const Header = () => {



    return (
        <motion.header className=" absolute top-0 w-full z-10 h-24 flex items-center justify-center pb-4"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex itens-center justify-between">
                {/* <Link to='/'>
                    <img src="/icons/icon-48x48.png" alt="Logo" width={58} height={49} />
                </Link>
                */}

                <Link to='/'>
                    <h1 className='text-4xl font-semibold'>Ibanez<span className='text-emerald-400'>.</span> </h1>
                </Link>

                <nav className="flex itens-center sm:gap-10 gap-2">
                    <Link to='/' className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400' activeClassName="text-gray-50">
                        <span className="text-emerald-400">#</span>
                        Home
                    </Link>
                    <Link to='/projects' className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400' activeClassName="text-gray-50">
                        <span className="text-emerald-400">#</span>
                        Projetos
                    </Link>
                    <Link to='/contact'
                        className='text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg hover:text-emerald-400'
                        activeClassName="text-gray-50"
                    >
                        <span className="text-emerald-400">#</span>
                        Contato
                    </Link>
                </nav>
            </div>


        </motion.header>
    );
};
