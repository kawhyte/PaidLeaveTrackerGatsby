import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import 'tachyons'
import '../layouts/tachyons/css/tachyons.css'
import img from '../layouts/img/fam-2.svg'
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
<div> 
    <div
      id="bg-hero"
      class="contain bg-center cover"
      style={{
        backgroundImage: "url("+ img + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 520
        // background: url('../layouts/img/fam-2.svg'),
      }}
    >
      <div class="bg-black-0 pb5 pb6-m pb7-l">
      
        <div class="tc-l mt3 mt4-m mt5-l ph3">
          <h1 class="f2 f1-l fw2 black-80 mb0 lh-title">
            {data.site.siteMetadata.title}
          </h1>
          <h2 class="fw1 f3 black-50 mt3 mb1">
            Track and review upcoming family paid leave legislations
          </h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
