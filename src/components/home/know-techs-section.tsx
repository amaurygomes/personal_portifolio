import React from "react";
import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../divider-h";
import { KnowTech } from "../know-tech";
import { motion } from "framer-motion";



export const KnowTechs = () => {

    const techsData = [
        { name: "React", startDate: "2023-05-29" },
        { name: "Node.js",  startDate: "2020-05-27" },
        { name: "Python",  startDate: "2024-02-20" },
        { name: "Tailwind",  startDate: "2022-05-23" },
        { name: "Typescript",  startDate: "2020-05-27" },
        { name: "C++",  startDate: "2024-02-20" },
        { name: "Django",  startDate: "2022-05-23" },
    ]


    return (
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" section="competencias" className=""/>
            <HorizontalDivider className="mb-16" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[60px]">
            {techsData.map((tech, index) => (
                <motion.div
                key={ index }
                initial={{opacity:0, x: -100}}
                whileInView={{opacity:1, x:0}}
                exit={{opacity:0, x: -100}}
                transition={{duration:0.15, delay: index * 0.1}}
                >
                <KnowTech  tech={tech} />
                </motion.div>
            ))}
        </div>
        </section >
    )
}