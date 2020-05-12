import React from 'react'

const statsGroup = props => {

    const { onClicked, billTotal, newBills, passBills, failedBills } = props;

    return (
        <>
        <div className= "ml-0 px-1"> 
        <div className="flex  mt-4 mb-2"> 
          {/* <p className="hidden md:inline-block text-sm font-medium  py-1 px-0 mr-2 rounded text-black align-middle"> {billTotal} {billTotal > 1 ? "bills": "bill"} found</p> */}
          {/* bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded */}
          
          <button onClick = {(e)=> onClicked('all') } className= "text-sm font-medium text-black-700 bg-indigo-200  mr-2 rounded align-middle py-2 px-4 border-b-4 border-gray-500 hover:border-green-300 transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:border-green-400">All bills ({billTotal})</button> 
          <button onClick = {(e)=> onClicked('new') } className= "text-sm font-medium text-black-700 bg-yellow-300 py-1 px-2  mr-2 rounded align-middle py-2 px-4 border-b-4 border-gray-500 hover:border-green-300 transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:border-green-400 "> {newBills > 1 ? "New bills": "New bill"} ({newBills})</button> 
          <button onClick = {(e)=> onClicked('major') } className= "text-sm font-medium text-black bg-indigo-100 py-1 px-2  mr-2 rounded align-middle py-2 px-4 border-b-4 border-gray-500 hover:border-green-300 transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:border-green-400 "> {passBills > 1 ? "Major updates": "Major update"} ({passBills})</button>
          <button onClick = {(e)=> onClicked('failed') } className= "text-sm font-medium text-black-700 bg-red-300 py-1 px-2 mr-2 rounded  align-middle py-2 px-4 border-b-4 border-gray-500 hover:border-green-300 transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:border-green-400"> {failedBills > 1 ? "Failed bills": "Failed bill"} ({failedBills}) </button>
        {/* <small className="font-normal leading-normal mb-4 text-gray-800 ">
         {billTotal} bills found
        </small> */}
        </div>
    </div>
    </>
    )
}

export default statsGroup;