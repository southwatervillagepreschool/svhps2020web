import React from "react"

const ArticleList = ({ listOfArticles }) => {
  return (
    <nav>
      <ul>
        {listOfArticles.map(singleArticle => {
          const { frontmatter } = singleArticle.childMarkdownRemark
          const { title } = frontmatter
          const formattedTitle = title
            ? title.replace(/ /, "_").toLowerCase()
            : ""
          return (
            <li>
              <a href={`#${formattedTitle}`}>{title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ArticleList
