import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



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
  `
  
  )

// console.log("Time ", time.currentBuildDate.currentDate)

  return (
    <div> 
      <div>{` `}</div>
    <footer className="w-full text-center border-t border-grey p-4 pin-b bg-blue-dark">
    <small className="f6 db tc">© {data.site.siteMetadata.year} <b className="ttu">{data.site.siteMetadata.title}</b>., All Rights Reserved</small>
  </footer>
  </div>
  )
}

export default Footer
