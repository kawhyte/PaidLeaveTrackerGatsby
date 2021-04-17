import React from 'react'
import { GetDataFromAPI } from '../Util/getAPIData'


import DisplayList from '../components/displayList'

const Dash = () => {



  let data = GetDataFromAPI()

  
  return (
    <div>
   
     
  
     <DisplayList type={"leave"} text={"Paid Family Leave bills"} data={data} /> 
     
    </div>
  )
}

export default Dash