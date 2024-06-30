import React from "react";
import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../divider-h";
import { KnowTech } from "../know-tech";



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
            <SectionTitle title="Conhecimentos" section="competencias" />
            <HorizontalDivider className="mb-16" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[60px]">
            {techsData.map((tech, index) => (
                <KnowTech key={index} tech={tech} />
            ))}
        </div>
        </section >
    )
}