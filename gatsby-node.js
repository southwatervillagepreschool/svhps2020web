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
      allMarkdownRemark {
        edges {
          node {
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
  `)
  //   console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/about/${node.frontmatter.title
        .replace(/ /g, "-")
        .replace(/[.]/g, "")
        .toLowerCase()}`,
      component: path.resolve("./src/templates/for-about.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
