import React from 'react'
import DisplayList from '../components/displayList'
import { GetEmploymentDataFromAPI } from '../Util/getEmpolymentAPIData'

const Employment = () => {
    let data = GetEmploymentDataFromAPI()
    console.log ("Enployment data ",data)
  return (
    <div>
   
  <DisplayList type={"employment"} text={"Unemployment bills"} data={data}   /> 
 
    </div>
  )
}

export default Employment
