import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'




const Card = () => {
    const data = useStaticQuery(graphql`
    query {
        OpenState{
         people(first: 2) {
              edges {
                  node {
                      name
                  }
              }
          }
        }
      
      }

  `)
  console.log("DATA",data.OpenState.people.edges[0].node.name);

return(
    <div> 

        
    <h1> This is a card </h1>
<p>{data.OpenState.people.edges[0].node.name}</p>
    <Link to="/page-2/">Go to page 2</Link>
   


    


    
    </div>
)

}



export default Card
