import * as React from "react"
import { RootLayout } from "../components/layout"
import { HeadFC } from "gatsby"


const NotFoundPage = () => {
  return (
    <RootLayout>
      <main className="flex mx-auto">
      <h1>Página não encontrada</h1>
      </main>
    </RootLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
