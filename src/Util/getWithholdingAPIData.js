import { graphql, useStaticQuery} from 'gatsby'


export function GetWithholdingDataFromAPI() {
    return useStaticQuery(graphql`
    query {
      OpenState{ 
        query2:  bills(last: 50, searchQuery:"\\\"withholding\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
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
    }
  
    `)
  }