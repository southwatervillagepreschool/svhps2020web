/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  pathPrefix: "/svhps2020web",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homePage`,
        path: path.join(__dirname, `src`, `editable-content`, `home`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutPage`,
        path: path.join(__dirname, `src`, `editable-content`, `about`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contactPage`,
        path: path.join(__dirname, `src`, `editable-content`, `contact`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsPage`,
        path: path.join(__dirname, `src`, `editable-content`, `news`),
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
  ],
}
