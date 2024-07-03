import React from "react";
import { SectionTitle } from "../section-title";
import { WorkExperienceItem } from "../work-experience";
import { WorkSectionProps } from "../../interface/graphql.d";

const WorkExperience = ({ allWorkExperience }: WorkSectionProps ) => {
    

    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle section="experiencias" title="Experiência profissional" className=""/>
                <p className="text-gray-400 mt-6">
                    Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {allWorkExperience.map((work, i) => (
                    <div key={i}>
                        <WorkExperienceItem work={work} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
