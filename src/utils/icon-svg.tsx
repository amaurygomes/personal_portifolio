import React from "react"

interface IconSvgProps {
  icon: string
  className?: string
}

export const IconSvg = ({ icon }: IconSvgProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}