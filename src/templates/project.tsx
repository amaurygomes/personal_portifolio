// src/templates/project.tsx
import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { RootLayout } from '../components/layout';
import { SectionTitle } from '../components/section-title';
import { motion } from 'framer-motion';
import { RenderHtml } from '../utils/render-html';
import { Badge } from '../components/badge';
import { TbBrandGithub } from 'react-icons/tb';
import { Button } from '../components/button';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { FiGlobe } from "react-icons/fi";

interface ProjectTemplateProps {
  amaurygomesAPI: {
    projectBySlug: {
      slug: string;
      title: string;
      description: string;
      thumbnail: string;
      githubUrl: string;
      liveProjectUrl: string;
      sections: Array<{ name: string; image: string }>;
      technologies: Array<{ name: string }>;
    };
  };
}

const ProjectTemplate: React.FC<PageProps<ProjectTemplateProps>> = ({ data }) => {
  const project = data.amaurygomesAPI.projectBySlug;

  return (
  <RootLayout>
<section className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative gap-4 pb-10 sm:pb-32 py-40 md:py-32 px-6 overflow-hidden">
            

            <SectionTitle
                section="projects"
                title={project.title}
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <motion.div className="text-gray-400 text-center max-w-[640px] my-4  sm:my-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <RenderHtml className="" html={project.description} />
            </motion.div>


            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center ">
                { project.technologies.map((tech, i) => (
                    <Badge key={i} tech={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    />
                ))}
            </div>

            <motion.div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <Link to={project.githubUrl} target="_blank">
                    <Button className="min-ww-[180px]">
                        <TbBrandGithub size={20} />
                        Código Fonte
                    </Button>
                </Link>
                <Link to={project.liveProjectUrl} target="_blank">
                    <Button className="min-ww-[180px]">
                        <FiGlobe size={20} />
                        Projeto Online
                    </Button>
                </Link>
            </motion.div>

            <Link to='/projects' className="flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors" 
            >
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>


        </section>

        <section className="container mb-16 my-12 md:my-12 flex flex-col gap-8 md:gap-32">
            { project.sections.map(section => (
                <motion.div key={section.name} className="flex flex-col items-center gap-6 md:gap-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-medium  text-gray-300">
                        {section.name}
                    </h2>
                    <img
                        src={`https://portifolio-api-ashy.vercel.app/media/${section.image}`}
                        width={800}
                        height={450}
                        className="w-full aspect-auto rounded-lg object-cover"
                        alt="Image Project"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </section>
        
    </RootLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    amaurygomesAPI {
      projectBySlug(slug: $slug) {
        slug
        title
        description
        thumbnail
        githubUrl
        liveProjectUrl
        sections {
          name
          image
        }
        technologies {
          name
        }
      }
    }
  }
`;

export default ProjectTemplate;
