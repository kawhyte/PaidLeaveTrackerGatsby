import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const BlogPage = (props) => {
  const options = {

    renderNode: {
      "embedded-asset-block": (node)=>{
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt ={alt} src={url}></img>}
    }
  }
  return (
    <Layout>
      <article >
        <h1 >
          {props.data.contentfulBlogPost.title}
        </h1>
        <h2 >
          An excerpt from the Form of the Book by Jan Tschichold
        </h2>
        <time >
          {props.data.contentfulBlogPost.date}
        </time>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </article>
    </Layout>
  )
}

export default BlogPage
