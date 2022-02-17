import * as React from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"


const Layout = ({ children }) => {

  return (
    <body className="bg-white">
      <Header/>
      <main className="mx-auto font-sans">{children}</main>
      <Footer/>
    </body>
  )
}

export default Layout
