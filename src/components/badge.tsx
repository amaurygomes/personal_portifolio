import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface BadgeProps extends MotionProps {
    tech: string;
}

export const Badge: React.FC<BadgeProps> = ({ tech, ...rest }) => {
    return (
        <motion.span
            className="text-emerald-400 bg-emerald-900 bg-opacity-80 text-sm py-1 px-3 rounded-lg"
            {...rest} 
        >
            {tech}
        </motion.span>
    );
};