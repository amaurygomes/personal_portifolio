import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portifólio`,
    siteUrl: `https://amaurygomes.com.br`,
    description: `Explore uma coleção de projetos variados e dinâmicos desenvolvidos por mim, abrangendo diferentes áreas e necessidades. Cada projeto reflete meu compromisso com soluções inovadoras e funcionais, utilizando uma abordagem Full Stack que combina criatividade, tecnologia e expertise para criar experiências significativas."`,
    image: `https://scontent.fcgr7-1.fna.fbcdn.net/v/t39.30808-6/449515973_7995892577136878_1546242452470783440_n.jpg9YS2a3hB7NN3dvBreEHs03d28NzaNW77Gjrf1araBwleIppxKHtHCZFty142QY7auPDH&_nc_ohc=qUS-wllRJocQ7kNvgE80k1q&_nc_ht=scontent.fcgr7-1.fna&oh=00_AYDHzbPiOO1xA2F-LjcHcuZZwRg_BrtC3tnZ1h_hoFur1Q&oe=66871675`,
    
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  pathPrefix: "/personal_portifolio",
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
