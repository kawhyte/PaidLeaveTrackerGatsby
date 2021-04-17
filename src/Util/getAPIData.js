import { graphql, useStaticQuery} from 'gatsby'



export function GetDataFromAPI() {
    return useStaticQuery(graphql`
    query {
      OpenState{ 
        query1:bills(last: 99,  actionSince: "2021-01-01", updatedSince: "2021-01-01", subject:"Family Leave") {
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
        query2:  bills(last: 99, searchQuery:"\\\"paid family\\\"" ,  actionSince: "2021-01-01", updatedSince: "2021-01-01") {
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
