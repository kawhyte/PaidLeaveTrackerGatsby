import React from 'react'
import { Link } from "gatsby"
import Footer from "../components/footer"

const SecondPage = () => {

  return( 
  <div> 
  <div>
    <h1 className="fw5 sans-serif">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
  <Footer /> 
  </div>
  )
  }

export default SecondPage
