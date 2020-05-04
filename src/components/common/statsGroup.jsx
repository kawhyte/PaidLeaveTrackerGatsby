import React from 'react'

const statsGroup = props => {

    const { billTotal, newBills, passBills, failedBills } = props;

    return (
        <>
        <div className= "ml-4 px-1"> 
        <div className="flex  mt-4 mb-2"> 
          {/* <p className="text-sm font-medium bg-blue-300 py-1 px-2 mr-2 rounded text-black align-middle"> {billTotal} bills found</p> */}
          <p className="text-sm font-medium text-black-700 bg-yellow-300 py-1 px-2  mr-2 rounded align-middle">{newBills} new bills</p> 
          <p className="text-sm font-medium text-black-700 bg-red-300 py-1 px-2 mr-2 rounded  align-middle">{failedBills} failed bills</p>
          <p className="text-sm font-medium text-black bg-indigo-100 py-1 px-2  mr-2 rounded align-middle">{passBills} major updates/became law</p>
        </div>
        <small className="font-normal leading-normal mb-4 text-gray-800 ">
         {billTotal} bills found
        </small>
    </div>
    </>
    )
}

export default statsGroup;