import React from "react";
import { format, differenceInMonths, differenceInYears } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { Badge } from "./badge";

interface WorkExperienceProps {
    work: {
        companyName: string;
        companyUrl: string;
        companyLogo: string; // Aqui está correto, companyLogo em camelCase
        description?: string;
        endDate: string;
        role: string;
        startDate: string;
        technologies: string[];
    };
}

export const WorkExperienceItem: React.FC<WorkExperienceProps> = ({ work }) => {
    const startDate = new Date(work.startDate);
    const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR });
    const formattedEndDate = work.endDate
        ? format(new Date(work.endDate), 'MMM yyyy', { locale: ptBR })
        : 'Atualmente';

    const end = work.endDate ? new Date(work.endDate) : new Date();
    const months = differenceInMonths(end, startDate);
    const years = differenceInYears(end, startDate);
    const monthsRemaining = months % 12;

    const formattedDuration =
        years > 0
            ? `${years} ano${years > 1 ? 's' : ''}${monthsRemaining > 0
                ? ` e ${monthsRemaining} mês${monthsRemaining > 1 ? 'es' : ''}`
                : ''
            }`
            : `${months} mês${months > 1 ? 'es' : ''}`;

    return (
        <motion.div
            className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center flex-col gap-4">
                <div className="rounded-lg border border-gray-500 p-0.5">
                    <img
                        src='/icons/icon-48x48.png'
                        width={40}
                        height={40}
                        className="rounded-lg object-contain h-full w-full"
                        alt={`Logo da empresa ${work.companyName}`}
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <Link
                        to={work.companyUrl}
                        target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ {work.companyName}
                    </Link>
                    <h4 className="text-gray-300">{work.role}</h4>
                    <span className="text-gray-500">
                        {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
                    </span>

                    <p className="text-gray-400">{work.description}</p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350] mb-8">
                    {work.technologies.map((tech, i) => (
                        <Badge
                            key={i}
                            tech={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default WorkExperienceItem;
