import { graphql, useStaticQuery} from 'gatsby'



export function GetDataFromAPI() {
    return useStaticQuery(graphql`
    query {
      OpenState{ 
        query1:bills(last: 10,  actionSince: "2021-02-02", updatedSince: "2021-02-02", subject:"Family Leave") {
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
        query2:  bills(last: 99, searchQuery:"\\\"paid family\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
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
