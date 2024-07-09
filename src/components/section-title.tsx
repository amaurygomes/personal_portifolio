import React from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string
    section: string
    className: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, section, className }) => {

    const animProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }

    }

    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <motion.span className="font-mono text-sm text-emerald-400"
                {...animProps}
                transition={{ duration: 0.5 }}>
                {`../ibanez/${section}`}
            </motion.span>
            <motion.h3 className="text-3xl font-medium"
                {...animProps}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {title}</motion.h3>


        </div>
    )
}