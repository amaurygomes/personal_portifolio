import React from "react";
import { ProjectCard } from "../project-card";
import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../divider-h";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "gatsby";

interface SectionTitleProps {

    title: string
    section: string
}

export const HighLightedProjects = () => {
    return (
        <section className="container py-16">

            <div>

                <SectionTitle title="Projetos em Destaque" section="destaques" className=""/>
                <HorizontalDivider className="mb-16" />
                <ProjectCard />
                <HorizontalDivider className="mb-16" />
                <ProjectCard />
                <HorizontalDivider className="mb-16" />
                <ProjectCard />
                <HorizontalDivider className="mb-16" />
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link to="/projects" className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>

            </div>

        </section>
    )
}