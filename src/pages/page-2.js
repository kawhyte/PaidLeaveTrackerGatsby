import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SecondPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1 className="fw5 sans-serif">Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
