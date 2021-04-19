import { graphql, useStaticQuery} from 'gatsby'


export function GetEmploymentDataFromAPI() {
    return useStaticQuery(graphql`
    query {
      OpenState{ 
        query1:bills(last: 10,  actionSince: "2021-01-01", updatedSince: "2021-01-01", subject:"unemployment") {
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
    
    
        query2:  bills(last: 50, searchQuery:"\\\"unemployment insurance\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
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