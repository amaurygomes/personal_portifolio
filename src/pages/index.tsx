import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from '../components/layout'
import { HeroSection } from "../components/home/hero-section"
import { HighLightedProjects } from "../components/home/highlighted-section"
import { KnowTechs } from "../components/home/know-techs-section"





const IndexPage: React.FC<PageProps> = ( ) => {

  return (
    <RootLayout>
      <HeroSection/>
      <KnowTechs/>
      <HighLightedProjects/>
    </RootLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Amauy Gomes</title>
