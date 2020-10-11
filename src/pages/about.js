import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Alfonso, a full-stack developer traveling across the UK.</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
