import React from 'react'
import format from 'date-fns/format'
import Progress from './progressBar'
import Status from './common/status'
import {sentenceCase} from '../Util/helper'
import Sources from './common/billSource'


const TableRow = ({ title, identifier, jurisdiction, actions, sources}) => {

    return (
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="">
              <div className="flex-shrink-0 w-10 h-10 mr-3">
                          <img className="w-full h-full rounded-full"
                              src={"https://res.cloudinary.com/babyhulk/image/upload/w_40,h_40,f_auto/v1584505244/flags/Flag_of_" + jurisdiction +".svg"} alt={"Flag of" + jurisdiction}
                               />
              </div>
                  <p className="text-gray-900 whitespace-no-wrap">{jurisdiction} | <span className="bg-blue-100 p-1"> {identifier}</span></p>
              
                </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="">
                <div className="ml-3">
                    <p className="text-gray-900  wrap">
                    {sentenceCase(title)} 
                    </p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white-200 text-sm">

<Progress actions ={actions}/> 

  <div className="inline-flex items-center bg-gray-400">
</div>
        </td>
        <td className="w-auto border-b border-gray-200 bg-white text-sm">


<div className="flex ml-3" > 
<Status actions ={actions}/>

</div>

        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white  text-sm">
            <p className="text-gray-900 w-56 ">
            <time>{format(new Date(actions[0].date),'LLL dd, yyyy')}</time>  
            </p>
             <p className=" f6 w-auto inline-block wrap">{sentenceCase(actions[0].description)}</p> 
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="text-gray-900 w-auto whitespace-pre">

            <Sources sources ={sources} />

            </div>
        </td>
    </tr>
    
    )
}
export default TableRow






