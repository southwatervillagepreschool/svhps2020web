import React from "react"
import { Link } from "gatsby"
const ArticleList = ({ listOfArticles }) => {
  return (
    <nav>
      <ul>
        {listOfArticles.map(singleArticle => {
          const { frontmatter } = singleArticle.childMarkdownRemark
          const { title } = frontmatter
          const formattedTitle = title
            ? title.replace(/ /g, "-").toLowerCase()
            : ""
          return (
            <li key={title}>
              <Link to={`/about/${formattedTitle}`}>{title}</Link>
              {/* <link to={`/about/${formattedTitle}`}>{title}</link> */}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ArticleList
