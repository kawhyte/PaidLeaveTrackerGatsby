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
      <main class="mw6 ml4">
        {data.allMarkdownRemark.edges.map((post) => {
          return (

<article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      
<Link to={`/blog/${post.node.fields.slug}`}>
      <div class="dtc w2 w3-ns v-mid">
        <img src="http://mrmrs.github.io/photos/p/2.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
      </div>
      <div class="dtc v-mid pl3">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">{post.node.frontmatter.title}</h1>
        <h2 class="f6 fw4 mt0 mb0 black-60">{post.node.frontmatter.date}</h2>
      </div>

      </Link>

      <div class="dtc v-mid">
        <form class="w-100 tr">
          <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
        </form>
      </div>
    </article>










          
           
          )
        })}
     </main>

     
    </Layout>
  )
}

export default BlogPage
