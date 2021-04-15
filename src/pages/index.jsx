import React from "react"
import Layout from "../layouts/Layout"
import Hero from "../sections/Hero"
import AboutMe from "../sections/AboutMe"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const Index = () => (
  <Layout>
    <Hero id="hero" />
    <AboutMe id="aboutMe" />
    <Projects id="projects" />
    <Contact id="contact" />
  </Layout>
)
export default Index;