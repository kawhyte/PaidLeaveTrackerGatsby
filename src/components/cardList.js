import React from 'react'
import Card from './card'
import { Link, graphql, useStaticQuery } from 'gatsby'

const CardList = function ({ robots, lotto }) {
  const data = useStaticQuery(graphql`
    query {
      OpenState {
        people(first: 5) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `)
  console.log('DATA', data.OpenState.people.edges[0].node.name)

  const cardComponent = data.OpenState.people.edges.map((p, i) => {
    return <Card key={i} name={p.node.name} />
  })

  return <div>{cardComponent}</div>
}

export default CardList
