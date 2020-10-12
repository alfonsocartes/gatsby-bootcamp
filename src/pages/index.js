import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Alfonso, a full-stack developer traveling across the UK.</h2>
    </Layout>
  )
}

export default IndexPage
