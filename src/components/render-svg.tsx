import React from "react"
    interface IconSvgProps {
      icon: string
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