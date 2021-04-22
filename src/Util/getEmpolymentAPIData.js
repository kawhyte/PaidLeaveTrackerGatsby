// import { graphql, useStaticQuery} from 'gatsby'


// export function GetEmploymentDataFromAPI() {
//     return useStaticQuery(graphql`
//     query {
//       OpenState{ 
//         query2:  bills(last: 5, searchQuery:"\\\"unemployment insurance\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
//           edges {
//             node {
//               identifier
//               subject
//               title
//               classification
//               updatedAt
//               createdAt
//               legislativeSession {
//                 identifier
//                 jurisdiction {
//                   name
//                 }
//               }
//               actions {
//                 order
//                 date
//                 description
//                 classification
//                 organization{
//                   classification
//                   foundingDate
//                   name
//                   image
//                   updatedAt
//                   createdAt
//                               }
//               }
              
//               sources {
//                 url
                  
//               }
//             }
//           }
//             totalCount
//         }
    
//         }
//     }
  
//     `)
//   }