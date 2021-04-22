export const GRAPHQL_API = "https://openstates.org/graphql"

export const GET_EMPLOYMENT_QUERY=`

{
    bills(first: 10) {
      edges {
        node {
          createdAt
          id
          identifier
        }
      }
    }
  }



`