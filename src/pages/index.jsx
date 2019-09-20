import React from "react"
import Layout from "../layouts/Layout"
import Button from "../components/Button"
import Section from "../components/Section"

export default () => (
  <Layout>
    <Section>
      <header className="article-header">Hi, I&apos;m Cara</header>
      <p>
        Frontend developer, designer, & UX researcher. I like to make things.
        Catch me learning in public and blogging.
      </p>
      <form method="get" action="resume.pdf">
        <Button type="submit">See Resume</Button>
      </form>
    </Section>
  </Layout>
)
