import * as React from "react"
import { Link, graphql, type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from "../components/layout"
import { SectionTitle } from "../components/section-title"
import { motion } from "framer-motion"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { ProjectsListProps } from "../interface/graphql.d"
import { ProjectsList } from "../components/projects/project-list"



const ProjectPage  = ( { data }:ProjectsListProps) => {

  return (
    <RootLayout >
      <section className="w-full lg:h-[500px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-40 px-6 lg:pb-[32px]">
        <SectionTitle
          section="projetos"
          title="Meus Projetos"
          className="text-center items-center [&>h3]:text=4xl"
        />
        <motion.div className="flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-center  max-w-[640px] my-6  text-sm sm:text-base">Abaixo você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.</p>
          <Link to="/" className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors">
            <HiArrowNarrowLeft />
            Voltar para Home
          </Link>
        </motion.div>

        

      </section>

      <ProjectsList allProjects={data.amaurygomesAPI.allProjects}/>
      

    </RootLayout>
  )
}

export default ProjectPage

export const Head: HeadFC = () => <title>Projetos</title>


export const query = graphql`
query MyQuery {
  amaurygomesAPI {
    allProjects {
      slug
      title
      shortDescription
      thumbnail
      technologies {
        name
      }
    }
  }
}

`