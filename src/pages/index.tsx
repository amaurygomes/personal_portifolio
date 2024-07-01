import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from '../components/layout'
import { HeroSection } from "../components/home/hero-section"
import { HighLightedProjects } from "../components/home/highlighted-section"
import { KnowTechs } from "../components/home/know-techs-section"
import WorkExperience from "../components/home/work-experience-section"
import { graphql } from "gatsby"




interface IndexPageProps extends PageProps {
  data: {
    amaurygomesAPI: {
      pageInfo: {
        name: string;
        profilePicture: string;
        introduction: string;
        cv: string;
        socials: {
          icon: string;
          url: string;
        }[];
        technologies: {
          name: string;
          startDate: string;
          icon: string;
        }[];
      };
      knowTechnologies: {
        techs: {
          name: string;
          startDate: string;
          icon: string;
        }[];
      };
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {

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