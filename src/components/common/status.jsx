import React from 'react'
import {didBillFailGovernor,isBillNew, isUpdateMajor} from '../../Util/helper'



function status({actions}) {
    return (
        <div>
            {isBillNew(actions) ?   <span className="flex rounded-full text-white bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>: " "} 
            {didBillFailGovernor(actions) ? <span className="flex rounded-full bg-red-500 text-black uppercase px-2 py-1 text-xs font-bold mr-3">Failed</span>: " "} 
            {isUpdateMajor(actions) ? <a href="https://www.google.com/" className="flex rounded-full text-black bg-indigo-100 uppercase px-2 py-1 text-xs font-bold mr-3"> Major</a> : " "}
        </div>
    )
}

export default status
