import React from 'react'
import Card from './card'
import { Link, graphql, useStaticQuery } from 'gatsby'

const CardList = function ({ robots, lotto }) {
  const data = useStaticQuery(graphql`
  query{

    OpenState{
     
     bills(first: 5, searchQuery:"paid+family+leave", updatedSince: "2019-11-15") {
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
         date
         description
         classification
       }
       documents {
         date
         note
         links {
           url
         }
       }
       versions {
         date
         note
         links {
           url
         }
       }
       sources {
         url
         note
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

  return <div>{cardComponent}</div>
}

export default CardList
