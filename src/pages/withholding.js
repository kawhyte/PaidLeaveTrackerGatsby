import React, { useEffect, useState } from 'react'
import DisplayList from '../components/displayList'
// import { GetEmploymentDataFromAPI } from '../Util/getEmpolymentAPIData'
import { GET_EMPLOYMENT_QUERY, GRAPHQL_API } from '../Util/constants'
import axios from 'axios'

const Withholding = () => {
  const [newData, setData] = useState({ bills: [] })
  const [isFetched, setisFetched] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await axios.post(
          GRAPHQL_API,
          {
            query: `
          {
            bills(last: 50, searchQuery:"\\\"withholding\\\"" ,  actionSince: "2021-02-02", updatedSince: "2021-02-02") {
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
          
          
          `,
          },
          {
            headers: {
              Accept: 'application/json',
              'X-API-KEY': '7af11ccd-afc5-4b19-9217-76f9f838389b',
            },
          }
        )
        console.log('axios data', queryResult.data.data.bills)
        const result = queryResult.data.data
        setData({ bills: result })
        setisFetched(true)
      } catch (error) {
        console.log(error)
        return false
      }
    }
    fetchData()
  }, [])
  
  //let data = GetEmploymentDataFromAPI()
  //console.log('Enployment data ', data)
  return (
    <div>
      {isFetched ? (
        <DisplayList
          type={'withholding'}
          text={'Withholding bills'}
          data={newData}
        />
      ) : (
        <p> Loading data...</p>
      )}
    </div>
  )
}

export default Withholding
