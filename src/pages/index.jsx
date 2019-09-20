import React from "react"
import Layout from "../layouts/Layout"
import Hero from "../sections/Hero"
import AboutMe from "../sections/AboutMe"
import Witchcraft from "../sections/Witchcraft"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

export default () => (
  <Layout>
    <Hero id="hero" />
    <AboutMe id="aboutMe" />
    <Witchcraft id="witchcraft" />
    <Projects id="projects" />
    <Contact id="contact" />

    {/* <Section>
      <header className="article-header">Hi, I&apos;m Cara</header>
      <p>
        Frontend developer, designer, & UX researcher. I like to make things.
        Catch me learning in public and blogging.
      </p>
      <form method="get" action="resume.pdf">
        <Button type="submit">See Resume</Button>
      </form>
    </Section> */}
  </Layout>
)
