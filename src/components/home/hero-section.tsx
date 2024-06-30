import React from 'react';
import { Badge } from '../badge';
import { Link } from 'gatsby';
import { Button } from '../button';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

export const HeroSection = () => {

    const techsData = [
        { name: "React" },
        { name: "Node.js" },
        { name: "Python" },
    ]

    return (




        <section className="w-full lg:h-[700px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-40 lg:pb-[110px]">
            <div className="container flex itens-start justify-between flex-col-reverse sm:flex-row">

                <motion.div className="w-full lg:max-w-[530px]  "
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-emerald-400 font-mono ">Olá, meu nome é</p>
                    <h2 className="font-medium text-4xl mt-2">John Doe</h2>
                    <p className='text-gray-400 my-6 text-sm sm:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo expedita omnis voluptate error tenetur quaerat consectetur! Sunt quis ipsam reprehenderit. Dolorem nesciunt fugit dolores? Laboriosam natus id sequi architecto?
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">

                        {techsData.map((tech, i) => (
                            <Badge
                                tech={tech.name}
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}


                            />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Link to='https://fb.com/amaurygomesibanez'>
                            <Button className='shadow-button w-max'>Baixar CV <GrDocumentDownload /></Button>
                        </Link>
                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            <Link to='https://fb.com/amaurygomesibanez' target='_blank'>
                                <FaFacebook />
                            </Link>
                            <Link to='https://wa.me/67991044105' target='_blank'>
                                <FaWhatsapp />
                            </Link>
                            <Link to='https://github.com/amaurygomes' target='_blank'>
                                <FaGithub />
                            </Link>
                            <Link to='https://linkedin.com/amaurygomes' target='_blank'>
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>

                </motion.div>

                <motion.div className="rounded-sm origin-center"
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <StaticImage className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover'
                        src="../images/monkey.jpg"
                        alt="Profile Picture"
                        width={420}
                        height={404}
                        loading='lazy'
                    />
                </motion.div>

            </div>
        </section>

    )
}