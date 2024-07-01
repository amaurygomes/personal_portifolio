import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from '../components/layout'
import { HeroSection } from "../components/home/hero-section"
import { HighLightedProjects } from "../components/home/highlighted-section"
import { KnowTechs } from "../components/home/know-techs-section"
import WorkExperience from "../components/home/work-experience-section"
import { graphql } from "gatsby"




const IndexPage: React.FC<PageProps> = ({ data }) => {

  return (
    <RootLayout>
      <HeroSection data={data.amaurygomesAPI.pageInfo} />
      <KnowTechs data={data.amaurygomesAPI.knowTechnologies} />
      <HighLightedProjects />
      <WorkExperience />
    </RootLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Amauy Gomes</title>

export const query = graphql`

query MyQuery {
  amaurygomesAPI {
    pageInfo(id: 1) {
      name
      profilePicture
      introduction
      cv
      socials {
        icon
        url
      }
      technologies {
        name
      }
    }
    knowTechnologies(id: 1) {
      techs {
        name
        startDate
        icon
      }
    }
  }
}

`