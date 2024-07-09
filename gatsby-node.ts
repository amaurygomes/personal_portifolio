import path from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query para obter os dados dos projetos
  const result = await graphql<any>(`
    query {
      amaurygomesAPI {
        allProjects {
          slug
          title
          description
          pagethumbnail
          liveProjectUrl
          githubUrl
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Template para as páginas de projetos
  const projectTemplate = path.resolve('src/templates/project.tsx');

  // Criar páginas para cada projeto
  result.data.amaurygomesAPI.allProjects.forEach((project: any) => {
    createPage({
      path: `/project/${project.slug}`, // Caminho da URL
      component: projectTemplate, // Componente do template
      context: {
        slug: project.slug,
      }
    });
  });
};
