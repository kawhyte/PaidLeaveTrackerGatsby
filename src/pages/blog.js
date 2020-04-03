import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <header class="bb b--black-70 pv4">
        <h3 class="f2 fw7 ttu ml3 tracked lh-title mt0 mb3 avenir">Blog Posts</h3>
        <h4 class="f3 fw4 i lh-title mt0 ml3">Siem Reap, Cambodia</h4>
      </header>
      <ol>
        {data.allMarkdownRemark.edges.map((post) => {
          return (
            <li>
              <article>
                <a
                  class="link dt w-100 bb b--black-10 pb2 mt2 dim blue"
                  href="#0"
                >
                  <div class="dtc w3">
                    <img
                      src="http://mrmrs.github.io/images/0010.jpg"
                      class="db w-100"
                    />
                  </div>
                  <div class="dtc v-top pl2">
                    <Link to={`/blog/${post.node.fields.slug}`}>
                      <h1 class="f6 f5-ns fw6 lh-title black mv0">
                        {post.node.frontmatter.title}
                      </h1>
                    </Link>
                    <h2 class="f6 fw4 mt2 mb0 black-60">
                      Posted by: Kenny Whyte
                    </h2>
                    <dl class="mt2 f6">
                      <dt class="clip">Date</dt>
                      <dd class="ml0">{post.node.frontmatter.date}</dd>
                    </dl>
                  </div>
                </a>
              </article>
            </li>
          )
        })}
      </ol>

     
    </Layout>
  )
}

export default BlogPage
