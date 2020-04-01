import React from 'react'
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"

const IndexPage = () => {

  return ( 
  <div  className="Roboto">
<Header /> 
<Hero /> 




    <h1 className="fw5 sans-serif">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <Footer /> 
  </div>


)
  
}

export default IndexPage
