import React from "react";
import { getRelativeTimeString } from "../utils/relative-times";
import { IconSvg } from "../utils/icon-svg";
import { FaCode } from "react-icons/fa";

interface KnowTechProps {
    tech: {
        name: string
        startDate: string
    }
}



export const KnowTech: React.FC<KnowTechProps> = ({ tech }) => {

    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate),
        'pt-BR',
      ).replace('há ', '')

    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <FaCode />
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )
}
