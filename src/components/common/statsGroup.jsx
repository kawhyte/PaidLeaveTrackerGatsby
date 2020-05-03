import React from 'react'

const statsGroup = props => {

    const { billTotal, currentPage, pageSize, newBills, passBills, failedBills } = props;

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