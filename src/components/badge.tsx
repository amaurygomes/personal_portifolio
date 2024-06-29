import React from 'react';

interface BadgeProps {
    tech: string;
}

export const Badge: React.FC<BadgeProps> = ({ tech }) => {
    return (
        <span className="text-emerald-400 bg-emerald-900 bg-opacity-80 text-sm py-1 px-3 rounded-lg">
            {tech}
        </span>
    );
};

