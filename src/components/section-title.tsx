import React from "react";
import { cn } from "../utils/cn";

interface SectionTitleProps {
    title: string
    section: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title, section} ) => {
    return  (
        <div className={cn('flex flex-col gap-4')}>
            <span className="font-mono text-sm text-emerald-400">
                {`../amaurygomes/${section}`}
            </span>
            <h3 className="text-3xl font-medium">{title}</h3>
            

        </div>
    )
}