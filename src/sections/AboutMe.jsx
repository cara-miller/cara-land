import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "../components/Article"

export default () => (
  <Article articleTitle="About Me" id="about">
    <h2 className="section-header">
      <span>You could say </span>
      <span className="rwd-line">I’m fullstack </span>
      <span className="rwd-line">for the front end.</span>
    </h2>
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
            id
            html
          }
        }
      `}
      render={(data) => (
        <div
          className="section-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      )}
    />
  </Article>
)
