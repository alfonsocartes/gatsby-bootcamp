import React from "react"
import Layout from "../components/layout.js"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via
        <a
          href="https://twitter.com/cartes_dev"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          @cartes_dev{" "}
        </a>
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
