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
              'X-API-KEY': process.env.GATSBY_API_URL,
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
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <div className="flex items-center justify-center align-middle h-screen">
          <div className="flex flex-col">
            <img className="h-16  w-32" src="/solid.gif" alt="this slowpoke moves" />
            <p className =" font-bold text-lg"> Fetching Data...</p>
          </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default Withholding
