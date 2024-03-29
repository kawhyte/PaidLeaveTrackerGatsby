
// let activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || process.env.OPENSTATE ||  process.env.CONTENTFUL_ACCESS_TOKEN || "development" || "production"

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
//console.log(`Using environment config: ${activeEnv}`)
//process.env.GATSBY_EXPERIMENTAL_QUERY_CONCURRENCY=20

require("dotenv").config()

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Paid Leave Legislation Tracker',
    author: 'Kenny Whyte',
    year: 2020,
    siteUrl:`https://paidleave.netlify.app`
  },
  plugins: [
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-7700317-2",
      head: true,
      anonymize: true,
      respectDNT: true,
      pageTransitionDelay: 0,
    },
  },
    
    'gatsby-plugin-react-helmet',

  

],
plugins: [`gatsby-plugin-sitemap`,`gatsby-plugin-robots-txt`],
plugins: ['gatsby-plugin-postcss'],plugins: [`gatsby-plugin-fontawesome-css`],

plugins: [
  // You can should only have one instance of this plugin
  {
    resolve: `gatsby-plugin-netlify-identity`,
    options: {
      url: `https://paidleave.netlify.app/` // required!
    }
  }
],

// plugins: [
//   {
//     resolve: `gatsby-plugin-canonical-urls`,
//     options: {
//       siteUrl: `https://festive-raman-38b110.netlify.app`,
//     },
//   },
// ], 
// plugins: [
//   {
//     resolve: 'gatsby-plugin-robots-txt',
//     options: {
//       host: 'https://festive-raman-38b110.netlify.app/',
//       sitemap: 'https://festive-raman-38b110.netlify.app/sitemap.xml',
//       output:'./src/Util/robot.txt',
//       policy: [{ userAgent: '*', allow: '/' }]
//     }
//   }
// ],

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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "OpenState",
        fieldName: "OpenState",
        url: "https://openstates.org/graphql",
        batch: true,
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "X-API-KEY":process.env.OPENSTATE,
          
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   }
    // },
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
