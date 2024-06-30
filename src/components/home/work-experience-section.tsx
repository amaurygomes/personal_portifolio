import React from "react";
import { SectionTitle } from "../section-title";
import { WorkExperienceItem } from "../work-experience";

const WorkExperience = () => {
    const workExperienceData = [
        {
            companyName: "Tech Solutions Inc.",
            companyUrl: "https://t4.ftcdn.net/jpg/07/04/77/31/240_F_704773105_g7Av00xoHGhbDye1tFEIMTYn0cog7eOk.jpg",
            companyLogo: "https://t4.ftcdn.net/jpg/07/04/77/31/240_F_704773105_g7Av00xoHGhbDye1tFEIMTYn0cog7eOk.jpg",
            description: "Trabalhei como desenvolvedor full-stack, participando de projetos de grande escala.",
            endDate: "2023-05-31",
            role: "Desenvolvedor Full-Stack",
            startDate: "2020-09-01",
            technologies: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"]
        },
        {
            companyName: "Web Development Co.",
            companyUrl: "https://i.pinimg.com/736x/28/08/c2/2808c2a15aa639d7f66866c123e76144.jpg",
            companyLogo: "https://i.pinimg.com/736x/28/08/c2/2808c2a15aa639d7f66866c123e76144.jpg",
            description: "Desenvolvi e mantive aplicações web para clientes diversos.",
            endDate: "2020-08-15",
            role: "Desenvolvedor Front-End",
            startDate: "2018-03-15",
            technologies: ["HTML", "CSS", "JavaScript", "Angular"]
        }
    ];

    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle section="experiencias" title="Experiência profissional" />
                <p className="text-gray-400 mt-6">
                    Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {workExperienceData.map((work) => (
                    <div key={work.companyName}>
                        <WorkExperienceItem work={work} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
