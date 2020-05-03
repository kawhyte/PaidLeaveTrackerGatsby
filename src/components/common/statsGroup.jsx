import React from 'react'
import {sentenceCase,isBillNew2, isBillSignedByGovornor, isBillFailedByGovornor, isUpdateMajor, didBillPassGovernor} from '../../Util/helper.js'

const statsGroup = props => {

    const {  actions, billTotal, newCount, majorCount, currentPage, pageSize, newBills, passBills, failedBills } = props;

    // const newb = isBillNew2(actions)
   // console.log("newb - ", newb)

    return (
        <>
        <div className= "ml-4 px-1"> 
        <div className="flex  mt-4 mb-2"> 
          <p className="text-sm font-medium bg-blue-300 py-1 px-2 mr-2 rounded text-black align-middle"> {billTotal} bills found</p>
          <p className="text-sm font-medium bg-yellow-300 py-1 px-2  mr-2 rounded text-black align-middle">{newBills} new</p> 
          <p className="text-sm font-medium bg-red-300 py-1 px-2 mr-2 rounded text-black align-middle">{failedBills} failed</p>
          <p className="text-sm font-medium bg-indigo-300 py-1 px-2  mr-2 rounded text-black align-middle">{passBills} major updates/became law</p>
        </div>
        <small className="font-normal leading-normal mb-4 text-gray-800 ">
         Displaying page {currentPage}  of {pageSize}
        </small>
    </div>
    </>
    )
}

export default statsGroup;