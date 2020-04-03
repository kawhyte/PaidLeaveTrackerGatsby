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
      <article class="pa3 pa5-ns w-50-ns">
        <h1 class="f3 f2-m f1-l bb bw2 pb3">
          {props.data.contentfulBlogPost.title}
        </h1>
        <h2 class="f3 mid-gray lh-title">
          An excerpt from the Form of the Book by Jan Tschichold
        </h2>
        <time className="f6 ttu tracked gray">
          {props.data.contentfulBlogPost.date}
        </time>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        {/* <p class="measure lh-copy" dangerouslySetInnerHTML= {{ __html: props.data.markdownRemark.html }}></p> */}
      </article>
    </Layout>
  )
}

export default BlogPage
