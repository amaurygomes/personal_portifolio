import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from "../components/layout"




const ContactPage: React.FC<PageProps> = () => {

    return (
        <RootLayout>
            <h1>Contatos</h1>
        </RootLayout>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contato</title>