import React from "react"

const PageArticles = ({ listOfArticles }) => {
  // do not display any articles with a value less than one.
  const filteredList = listOfArticles.filter(
    a => a.childMarkdownRemark.frontmatter.order >= 1
  )

  console.log(filteredList)
  return (
    <>
      {filteredList.map(singleArticle => {
        const { frontmatter, html } = singleArticle.childMarkdownRemark
        const { title } = frontmatter
        const formattedTitle = title
          ? title.replace(/ /, "_").toLowerCase()
          : ""
        
        return (
          <article key={title}>
            {title && <h2 id={formattedTitle}>{title}</h2>}
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

export default PageArticles
