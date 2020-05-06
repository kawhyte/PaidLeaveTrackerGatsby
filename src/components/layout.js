import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"


export default ({ children }) => (
  <StaticQuery
  query={graphql`
  query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
       render={data => (
         <>
         <div className="container pt-1 md:pt-0 px-0 mx-auto flex flex-wrap flex-col md:flex-row items-center"> 
           <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} >
           <html lang="en" />
           <meta charSet="utf-8" name="Description" content="Track upcoming paid family and medical leave Legislations for US states" />
          <title>{data.site.siteMetadata.title}</title>
          
          
        
           </Helmet>
           <div>
             
     
             {children}

             <Footer />
           </div>
           
           </div>
         </>
       )}
     />
   )