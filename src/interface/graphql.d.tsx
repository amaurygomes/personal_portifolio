export interface TechinologiesProps {
    name: string
    icon: string
    startDate: string
}

export interface SocialsProps {
    icon: string
    url: string
    name: string
}

export interface KnowTechsProps {
    techs: TechinologiesProps[]
}

export interface PageInfoProps {
    name: string
    introduction: string
    cv: string
    profilePicture: string
    socials: SocialsProps[]
    technologies: TechinologiesProps[]
}

export interface ProjectProps {
    slug: string
    title: string
    shortDescription: string
    description: string
    githubUrl: string
    liveProjectUrl: string
    thumbnail: string
    pagethumbnail: string
    technologies: TechinologiesProps[]
}

export interface SectionProps {
    name: string
    image: string
    projects: ProjectProps[]
}

export interface WorkExperienceProps {
    companyName: string
    companyUrl: string
    companyLogo: string
    description?: string
    role: string
    startDate: string
    endDate: string
    technologies: TechinologiesProps[]
}


export interface IndexPageProps {
    data: {
        amaurygomesAPI: {
            pageInfo: PageInfoProps
            knowTechnologies: KnowTechsProps
            highlightProjects: ProjectProps[]
            workExperience: WorkExperienceProps[]
        }
    }
}


export interface HeroSectionProps {
        pageInfo: PageInfoProps
    }

export interface knowSectionProps {
    knowTechnologies: {
        techs: TechinologiesProps[]
    }
}

export interface HighSectionProps {
    highlightProjects: {
        project: ProjectProps[]
    }
}

export interface KnowTechProps {
    tech: TechinologiesProps
}

export interface ProjectCardProps {
    project: ProjectProps
}