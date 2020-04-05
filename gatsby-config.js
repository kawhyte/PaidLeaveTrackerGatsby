
console.log ("⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️⚱️",process.env.CONTENTFUL_ACCESS_TOKEN)
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || process.env.CONTENTFUL_ACCESS_TOKEN || "development"

console.log(`%%%%%%%Using environment config%%%%%%%%%%: ${activeEnv}`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Paid Leave Legislation Tracker',
    author: 'Kenny Whyte',
    year: 2020,
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [`gatsby-plugin-postcss`],

  plugins: [
        // Advanced config, passing parameters to apollo-link
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "OpenState",
        fieldName: "OpenState",
        url: "https://openstates.org/graphql",
        // HTTP headers
        headers: {

          // Learn about environment variables: https://gatsby.dev/env-vars
          "X-API-KEY":"7af11ccd-afc5-4b19-9217-76f9f838389b",
          
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },





    

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
