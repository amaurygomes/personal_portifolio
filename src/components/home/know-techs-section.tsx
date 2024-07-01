import React from "react";
import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../divider-h";
import { KnowTech } from "../know-tech";
import { motion } from "framer-motion";

interface KnowTechsProps {
    data: {
        techs: {
            name: string;
            startDate: string;
            icon: string;
        }[];
    };
}

export const KnowTechs: React.FC<KnowTechsProps> = ({ data }) => {

    return (
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" section="competencias" className="" />
            <HorizontalDivider className="mb-16" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[60px]">
                {data.techs.map((tech, i) => (
                    <KnowTech key={tech.name} tech={tech}/>
                ))}
            </div>
        </section>
    );
};
