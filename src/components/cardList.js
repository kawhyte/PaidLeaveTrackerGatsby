import React from 'react'
import Card from './card'
import { graphql, useStaticQuery } from 'gatsby'

 let quote = '"';
const CardList = function (v) {
  const data = useStaticQuery(graphql`
  query {
    OpenState{ 
           bills(first: 5, searchQuery:"paid family leave" , updatedSince: "2019-06-15") {
        edges {
          node {
            identifier
            title
            classification
            updatedAt
            createdAt
            legislativeSession {
              identifier
              jurisdiction {
                name
              }
            }
            actions {
              order
              date
              description
              classification
              organization{
                classification
                foundingDate
                name
                image
                updatedAt
                createdAt
                            }
            }
            
            sources {
              url
                
            }
          }
        }
      }
    }
  }

  `)
  // console.log('DATA', data.OpenState.bills.edges[0].node.title)

  const cardComponent = data.OpenState.bills.edges.map((b, i) => {
    return <Card 
    key={i} 
    title={b.node.title}
    identifier={b.node.identifier}
    jurisdiction={b.node.legislativeSession.jurisdiction.name}
    createdAt = {b.node.createdAt}
    sources = {b.node.sources}
    actions =  {b.node.actions}
    
    
    
    
    />
  })

  return <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{cardComponent}</div>
}

export default CardList
