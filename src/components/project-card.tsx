import React from "react";
import { Badge } from "./badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from 'gatsby-plugin-image';

export const ProjectCard = () => {

    const animProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    }

    return (
        <motion.div className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKEz6iol33k1HHNgoyoQVwC2gxrb-a7kew&s://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.secretstache.com%2Fblog%2Fstop-using-lorem-ipsum%2F&psig=AOvVaw3E-RlNbgyLOsJUfojYAqfa&ust=1719780647689000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiZxqzYgYcDFQAAAAAdAAAAABAE"
                alt="Thumbnail Project"
                width={420}
                height={304}
                loading="lazy"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
            />
            <div>
                <motion.h3 className="flex items-center gap-3 font-medium text-lg text-gray-50"
                    {...animProps}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/icons/icon-48x48.png"
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                    Loren Project
                </motion.h3>
                <motion.p className="text-gray-400 my-6"
                    {...animProps}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >
                    Lorem ipsum dolor sit amet
                </motion.p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <Badge tech="Nextjs" />
                    <Badge tech="Python" />
                    <Badge tech="Grahpene" />
                </div>
                <Link to="/project/id" className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors">
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </motion.div>
    )

}