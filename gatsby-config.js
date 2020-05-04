
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || process.env.OPENSTATE ||  process.env.CONTENTFUL_ACCESS_TOKEN || "development"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Paid Leave Legislation Tracker',
    author: 'Kenny Whyte',
    year: 2020,
  },
  plugins: ['gatsby-plugin-react-helmet',

  {
    resolve: "gatsby-plugin-postcss",
    options: {
      postCssPlugins: [require(`tailwindcss`)
      ]
    }
  },

], plugins: [
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://festive-raman-38b110.netlify.app`,
    },
  },
], 
plugins: [
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://festive-raman-38b110.netlify.app/',
      sitemap: 'https://www.example.com/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  }
],

plugins: [
  {
    resolve: `gatsby-plugin-build-date`,
    options: {
      formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
      formatting: {
        format: 'dddd D MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
        utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
      },
      //locale: 'fr', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
    },
  },
],

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
          "X-API-KEY":process.env.OPENSTATE,
          
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
