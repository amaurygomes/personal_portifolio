import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from "../components/layout"
import { SectionTitle } from "../components/section-title"
import { motion } from "framer-motion"
import { HiArrowNarrowLeft } from "react-icons/hi"




const ProjectPage: React.FC<PageProps> = () => {

  return (
    <RootLayout >
      <section className="w-full lg:h-[700px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-40 px-6 lg:pb-[110px]">
            <SectionTitle
                section="projetos"
                title="Meus Projetos"
                className="text-center items-center [&>h3]:text=4xl"
            />
            <motion.div className="flex flex-col items-center"
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            exit={{opacity:0, y:100}}
            transition={{duration:0.6}}
            >
                <p className="text-gray-400 text-center  max-w-[640px] my-6  text-sm sm:text-base">Abaixo você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.</p>
                <Link to="/">
                    <HiArrowNarrowLeft />
                    Voltar para Home
                </Link>
            </motion.div>


        </section>
    </RootLayout>
  )
}

export default ProjectPage

export const Head: HeadFC = () => <title>Projetos</title>