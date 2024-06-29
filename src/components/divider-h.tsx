import React from "react"
import { cn } from "../utils/cn"


type HorizontalDividerProps = {
  className?: string
}

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}