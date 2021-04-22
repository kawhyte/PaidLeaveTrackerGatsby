export const GRAPHQL_API = "https://openstates.org/graphql"

export const GET_EMPLOYMENT_QUERY=`

{
  bills(last: 50, searchQuery:"\\\"unemployment insurance\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
    edges {
      node {
        identifier
        subject
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
      totalCount
  }
}

`