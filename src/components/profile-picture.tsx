import React from "react";
import { motion } from "framer-motion";

export const ProfilePicture = () => {
    return (
        <div >
            <motion.div className="absolute w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] "

            >
                <img className='w-full h-full mb-6 lg:mb-0  object-contain mix-blend-lighten'
                    src="/img/photo.png"
                    alt="Profile Picture"
                    loading='lazy'
                />
            </motion.div>


            <motion.svg
                className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]'
                fill='transparent'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 506 506'
            >
                <motion.circle
                    cx='253'
                    cy='253'   
                    r='250'
                    stroke='#00ff99'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    initial={{strokeDasharray: '24 10 0 0'}}
                    animate={{strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22' ], rotate:[120, 360],}}
                    transition={{duration: 20, repeat: Infinity, repeatType: 'reverse'}}

                />
            </motion.svg>


            </div>

    )
}