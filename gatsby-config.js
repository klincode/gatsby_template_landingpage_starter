/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "tytuł strony Klienta (do edycji)",
    author: "Adam Klin",
    description: "description",
    keywords: "tytuł strony Klienta (do edycji)",
  },
  plugins: [`gatsby-plugin-sass`],
  plugins: [`gatsby-plugin-styled-components`],
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
  ],
};
