import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { RootLayout } from "../components/layout"
import { ContactForm } from "../components/contact"




const ContactPage: React.FC<PageProps> = () => {

    return (
        <RootLayout>
            <ContactForm/>
        </RootLayout>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contato</title>