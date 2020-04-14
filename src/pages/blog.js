import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      
      <header className="bb b--black-70 pv4">
        <h3 class="f2 fw7 ttu ml3 tracked lh-title mt0 mb3 avenir">
          Blog Posts
        </h3>
        <h4 className="f3 fw4 i lh-title mt0 ml3">Siem Reap, Cambodia</h4>
      </header>
      <main className="mw6 ml4">
        {data.allContentfulBlogPost.edges.map((post) => {
          return (
            <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
              <Link to={`/blog/${post.node.slug}`}>
                <div class="dtc w2 w3-ns v-mid">
                  <img alt="blog"
                    src="http://mrmrs.github.io/photos/p/2.jpg"
                    className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
                  />
                </div>
                <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">
                    {post.node.title}
                  </h1>
                  <h2 className="f6 fw4 mt0 mb0 black-60">
                    {post.node.publishedDate}
                  </h2>
                </div>
              </Link>

              <div className="dtc v-mid">
                <form className="w-100 tr">
                  <button
                    className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                    type="submit"
                  >
                    + Follow
                  </button>
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
