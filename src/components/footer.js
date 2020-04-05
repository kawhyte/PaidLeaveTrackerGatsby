import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'tachyons';
import '../layouts/tachyons/css/tachyons.css';


const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
          year
        }
      }
    }
  `)
  return (
    <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
    <small class="f6 db tc">© {data.site.siteMetadata.year} <b class="ttu">{data.site.siteMetadata.title}</b>., All Rights Reserved</small>
    <div class="tc mt3">
      <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
      <a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
      <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
    </div>
  </footer>
  )
}

export default Footer
