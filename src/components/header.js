import React from 'react'
import { Link } from "gatsby"

const Header = ({ siteTitle }) => { 


  return (  
  <div> 

  <nav className="dt w-100 mw8 center">

  <div className="dtc v-mid tr pa3">
    
   <Link className={"f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2 ph3"}  to="/">Home</Link>

    <a className="f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2 ph3"
      href="https://legislation-tweets.herokuapp.com/">Paid Leave Twitter Mentions</a>

   <Link className={"f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2 ph3"}  to="/blog">Blog</Link>

    <a className="f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2 ph3"
      href="https://www.kennywhyte.com/">Created with <span role="img" aria-label="pizza"> 🍕</span> by Kenny</a>
  </div>
</nav>


  </div>)
}

export default Header
