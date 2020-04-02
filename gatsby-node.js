/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
 
  if (node.internal.type === 'MarkdownRemark') { 
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
        node,
        name: 'slug',
        value:slug
    })
  }
}
