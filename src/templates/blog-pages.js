import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const BlogPage = (props) => {
  return (
    <Layout>
      <article class="pa3 pa5-ns w-50-ns">
  <h1 class="f3 f2-m f1-l bb bw2 pb3">{props.data.markdownRemark.frontmatter.title}</h1>
  <h2 class="f3 mid-gray lh-title">
            An excerpt from the Form of the Book by Jan Tschichold
          </h2>
          <time className="f6 ttu tracked gray">{props.data.markdownRemark.frontmatter.date}</time>
  <p class="measure lh-copy" dangerouslySetInnerHTML= {{ __html: props.data.markdownRemark.html }}></p>
 
</article>



    </Layout>
  )
}

export default BlogPage
