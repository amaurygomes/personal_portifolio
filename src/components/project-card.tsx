import React from "react";
import { Badge } from "./badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from 'gatsby-plugin-image';
import { ProjectCardProps } from "../interface/graphql.d";
import { HorizontalDivider } from "./divider-h";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

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
            <img src={`https://api.amaurygomes.com.br/media/${project.thumbnail}`}
                alt={`Thumbnail ${project.title}`}
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
                    {project.title}
                </motion.h3>
                <motion.p className="text-gray-400 my-6"
                    {...animProps}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >
                    {project.shortDescription}
                </motion.p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">

                    {project.technologies.map((tech, i) => <Badge
                        key={i}
                        tech={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
                    />)}

                </div>
                <Link to="/project/id" className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors">
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </motion.div>
    )

}