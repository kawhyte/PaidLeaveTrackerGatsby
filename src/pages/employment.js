import React, { useEffect, useState } from 'react'
import DisplayList from '../components/displayList'
// import { GetEmploymentDataFromAPI } from '../Util/getEmpolymentAPIData'
import { GET_EMPLOYMENT_QUERY, GRAPHQL_API } from '../Util/constants'
import axios from 'axios'

const Employment = () => {
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
          type={'employment'}
          text={'Unemployment bills'}
          data={newData}
        />
      ) : (
          <div> Loading data...
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>

          
          </div>
      )}
    </div>
  )
}

export default Employment
