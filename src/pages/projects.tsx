import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from "../components/layout"




const ProjectPage: React.FC<PageProps> = () => {

  return (
    <RootLayout >
      <h1>Projetos</h1>
    </RootLayout>
  )
}

export default ProjectPage

export const Head: HeadFC = () => <title>Projetos</title>