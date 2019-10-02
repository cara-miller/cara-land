import React from "react"
import Article from "../components/Article"

export default function Hero() {
  return (
    <Article id="hero" articleClass="article__no-border">
      <h1 className="hero-header">Hi, I&apos;m Cara Margot.</h1>
      <h2 className="hero-subheader">
        Web development,
        <br />
        UX research, design systems, <br />& general front end magic
      </h2>
    </Article>
  )
}
