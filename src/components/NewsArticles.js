import React from "react"

const NewsArticles = ({ listOfArticles }) => {
  return (
    <>
      {listOfArticles.map(singleArticle => {
        const { frontmatter, html } = singleArticle.childMarkdownRemark
        const { title } = frontmatter
        const formattedTitle = title
          ? title.replace(/ /, "_").toLowerCase()
          : ""
        if (frontmatter.order === 0) {
          return
        }
        return (
          <article key={title}>
            {title && <h3 id={formattedTitle}>{title}</h3>}
            <section
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            ></section>
            {/* <hr /> */}
          </article>
        )
      })}
    </>
  )
}

export default NewsArticles
