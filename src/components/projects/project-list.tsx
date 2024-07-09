import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'gatsby'
import { ProjectListProps } from '../../interface/graphql.d'



export const ProjectsList = ({ allProjects }: ProjectListProps) => {


    return (
        <section className="container py-16 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {allProjects.map((project, i) => (


                <motion.div key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                    <Link to={`/project/${project.slug}`}>

                        <div className="group rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all ">
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    width={380}
                                    height={200}
                                    src={`https://api.amaurygomes.com.br/media/${project.thumbnail}`}
                                    alt="Thumb do Projeto"
                                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"

                                />
                            </div>

                            <div className="flex-1 flex flex-col p-4">
                                <strong className="font-mediun text-gray-50/90 group-hover:text-emerald-500 transition-all">{project.title}</strong>
                                <p className="mt-2 text-gray-400 line-clamp-4">{project.shortDescription}</p>

                                <span className="text-gray-300 text-sm font-medium block mt-auto truncate" >
                                    {project.technologies.map((tech) => (
                                        <span className="mx-1" key={tech.name}>
                                            {tech.name}
                                        </span>
                                    ))}
                                </span>


                            </div>

                        </div>

                    </Link>
                </motion.div>
            ))}


        </section>
    )
}

