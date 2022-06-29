const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // const fileNode = getNode(node.parent)
    // console.log(`\n`, fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug.toLowerCase().replace(/ /g, "-"),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "aboutPage" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `)
  //   console.log(JSON.stringify(result, null, 4))
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/about/${node.childMarkdownRemark.frontmatter.title
        .replace(/ /g, "-")
        .replace(/[.]/g, "")
        .toLowerCase()}`,
      component: path.resolve("./src/templates/for-about.js"),
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })

  const vacancies = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "vacanciesPage" }
          childMarkdownRemark: { frontmatter: { order: { gt: 0 } } }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  vacancies.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/vacancy${node.childMarkdownRemark.fields.slug
        .replace(/ /g, "-")
        .replace(/[.]/g, "")
        .toLowerCase()}`,
      component: path.resolve("./src/templates/vacancy.template.js"),
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })
}
