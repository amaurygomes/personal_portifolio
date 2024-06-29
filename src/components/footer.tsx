import React from "react"
import { FaRegCopyright } from "react-icons/fa"


export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center  bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
                2024
                <FaRegCopyright size={13} className="text-emerald-500" />
                <strong className="font-medium">Amaury Gomes Ibanez</strong>
            </span>

            
        </footer>
    )
}