import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
          year
          author
        }
      }
      build: allSiteBuildMetadata{
        nodes{
          buildTime(fromNow:true)
        }
      }
    }
  
  `
  
  )

// console.log("Time ", time.currentBuildDate.currentDate)
console.log( data)
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

            <hr className="h-px mt-1  bg-gray-700 border-none" />

            <div className="flex flex-col items-center justify-center mt-4 mb-2 md:flex-row">
                {/* <div>
                    <a href="https://www.kennywhyte.com/" className="text-xl font-bold">{data.build.nodes[0].buildTime}</a>
                </div> */}
                <div className="flex mt-5 md:m-0 items-center justify-center">
                    <div className="mx-6">
                   
                   <span className=" mr-4 text-gray-700 text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm"> Website information updated <span className="italic ">{data.build.nodes[0].buildTime}</span></span>
                    {/* <small>Created by <a href="https://www.kennywhyte.com/" className=" ml-0 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"> {data.site.siteMetadata.author}</a></small> */}
                  	</div>
                </div>
            </div>
        </div>
    </footer>
  </div>
  )
}

export default Footer


