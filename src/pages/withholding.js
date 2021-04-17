import React from 'react'
import DisplayList from '../components/displayList'
import { GetWithholdingDataFromAPI } from '../Util/getWithholdingAPIData'



const Withholding = () => {

  let data = GetWithholdingDataFromAPI()
  return (
    <div>
      <DisplayList type={'withholding'} text={"Withholding bills"} data={data}  />
    </div>
  )
}

export default Withholding


