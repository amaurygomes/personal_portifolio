import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from '../components/layout'
import { HeroSection } from "../components/home/hero-section"
import { HighLightedProjects } from "../components/home/highlighted-section"
import { KnowTechs } from "../components/home/know-techs-section"
import WorkExperience from "../components/home/work-experience-section"
import { graphql } from "gatsby"
import { IndexPageProps } from "../interface/graphql.d"




const IndexPage: React.FC<IndexPageProps> = ({ data }) => {

  return (
    <RootLayout>
      <HeroSection pageInfo={data.amaurygomesAPI.pageInfo} />
      <KnowTechs knowTechnologies={data.amaurygomesAPI.knowTechnologies} />
      <HighLightedProjects highlightProjects={data.amaurygomesAPI.highlightProjects}/>
      <WorkExperience allWorkExperience={data.amaurygomesAPI.allWorkExperience} />
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
    highlightProjects(id: 1) {
      project {
        title
        shortDescription
        thumbnail
        slug
        technologies {
          name
        }
      }
    }
    allWorkExperience {
      companyName
      companyUrl
      companylogo
      description
      role
      startDate
      endDate
      technologies {
        name
      }
    }
  }
}

`