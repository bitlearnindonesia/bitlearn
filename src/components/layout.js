import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <body className="bg-white">
      <Header/>
      <main className="max-w-6xl mx-auto md:px-6 px-4 py-8">{children}</main>
      <Footer/>
    </body>
  )
}

export default Layout
