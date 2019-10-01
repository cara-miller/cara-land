import React from "react"
import PropTypes from "prop-types"

export default function Article({ children, articleTitle, id, articleClass }) {
  return (
    <article className={articleClass} id={id}>
      <h1 className="article-header">{articleTitle}</h1>
      <section className="section-content">{children}</section>
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  articleTitle: PropTypes.string,
  id: PropTypes.string.isRequired,
  articleClass: PropTypes.string
}

Article.defaultProps = {
  articleClass: "article",
  articleTitle: null
}
