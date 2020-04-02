import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
      <h1>Blog</h1>
      <p> Post!</p>
      <ol>
        {data.allMarkdownRemark.edges.map((post) => {
          return (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              <p> {post.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>


      <article className="cf ph3 ph5-ns pv5">
  <header className="fn fl-ns w-50-ns pr4-ns">
    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
      On Typography
    </h1>
    <h2 class="f3 mid-gray lh-title">
      An excerpt from the Form of the Book by Jan Tschichold
    </h2>
    <time className="f6 ttu tracked gray">Sometime before 1967</time>
  </header>
  <div className="fn fl-ns w-50-ns">
    <p className="f5 lh-copy measure mt0-ns">
      TYPOGRAPHY, even when poorly executed, can never be taken for granted;
      nor is it ever accidental. Indeed, beauti- fully typeset pages are always
      the result of long experience. Now and then they even attain the rank of
      great artistic achievement. But the art of typesetting stands apart from
      ex- pressive artwork, because the appeal is not limited to a small
      circle. It is open to everyone's critical judgment, and nowhere does this
      judgment carry more weight. Typography that can- not be read by everybody
      is useless. Even for someone who constantly ponders matters of
      readability and legibility, it is difficult to determine whether
      something can be read with ease, but the average reader will rebel at
      once when the type is too small or otherwise irritates the eye; both are
      signs of a certain illegibility already.
    </p>
    <p className="f5 lh-copy measure">
      All typography consists of letters. These appear either in the form of a
      smoothly running sentence or as an assembly of lines, which may even have
      contrasting shapes. Good typog- raphy begins, and this is no minor
      matter, with the typeset- ting of a single line of text in a book or a
      newspaper. Using exactly the same typeface, it is possible to create either
      a pleasant line, easily read, or an onerous one. Spacing, if it is too wide
      or too compressed, will spoil almost any typeface.
    </p>
  </div>
</article>



    </Layout>
  )
}

export default BlogPage
