/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
//const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNode, createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
// console.log("🧯🧯🧯🧯🧯🧯",slug  )

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }



// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`./src/templates/blog-pages.js`)







  
//   const res = await graphql(`
//   query{
//     allContentfulBlogPost{
//       edges {
//         node{
       
//           slug
          
//         }
//       }
//     }
//   }
//   `)

//   res.data.allContentfulBlogPost.edges.forEach((edge) => {

//     createPage({
//       component: blogPostTemplate,
//       path: `/blog/${edge.node.slug}`,
//       context: {
//           slug: edge.node.slug
//       }
//     })
//   })
// }
