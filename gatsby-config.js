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
        path: path.join(__dirname, `src`, `pageSections`, `home`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutPage`,
        path: path.join(__dirname, `src`, `pageSections`, `about`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contactPage`,
        path: path.join(__dirname, `src`, `pageSections`, `contact`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsPage`,
        path: path.join(__dirname, `src`, `pageSections`, `news`),
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `HomePage`,
    //     path: path.join(__dirname, `src`, `pageSections`,'home'),
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `AboutPage`,
    //     path: path.join(__dirname, `src`, `pageSections`,'about'),
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `ContactPage`,
    //     path: path.join(__dirname, `src`, `pageSections`,'contact'),
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            // resolve: `gatsby-remark-images-anywhere`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // staticDir: "static",
              maxWidth: 700,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
