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

  //   <div> 
  //     <div>{` `}</div>
  //   <footer className="w-full text-center border-t border-grey p-4 pin-b bg-blue-dark">
  //   <small className="f6 db tc">© {data.site.siteMetadata.year} <b className="ttu">{data.site.siteMetadata.title}</b>., All Rights Reserved</small>
  // </footer>
  // </div>
    <div> 
  <footer className="flex justify-center px-4 text-gray-900">
        <div className="container py-6">

            <hr className="h-px mt-1 bg-gray-700 border-none" />

            <div className="flex flex-col items-center justify-center mt-4 md:flex-row">
                {/* <div>
                    <a href="https://www.kennywhyte.com/" className="text-xl font-bold">KW</a>
                </div> */}
                <div className="flex mt-4 md:m-0">
                    <div className="-mx-0">
                    <small >© {data.site.siteMetadata.year} <b className="uppercase">{data.site.siteMetadata.title}</b>, All Rights Reserved</small>
                   
                  	</div>
                </div>
            </div>
        </div>
    </footer>
  </div>
  )
}

export default Footer
