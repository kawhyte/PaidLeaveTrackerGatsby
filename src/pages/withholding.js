import React from 'react'
import DisplayList from '../components/displayList'
import { GetWithholdingDataFromAPI } from '../Util/getWithholdingAPIData'

import { GET_EMPLOYMENT_QUERY, GRAPHQL_API } from '../Util/constants'


const Withholding = () => {



  fetch('https://openstates.org/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-API-KEY": '7af11ccd-afc5-4b19-9217-76f9f838389b'
    },
    body: JSON.stringify({
      query: `
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
        `,
      
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log("WITH ",result));




  let data = GetWithholdingDataFromAPI()
  //console.log("PFL", data)
  return (
    <div>
      <DisplayList type={'withholding'} text={"Withholding bills"} data={data}  />
    </div>
  )
}

export default Withholding


