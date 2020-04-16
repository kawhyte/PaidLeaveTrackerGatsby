import React from 'react'
import format from 'date-fns/format'
import Progress from './progressBar'
import {getBillIntroduction, sentenceCase,isBillNew, isUpdateMajor, isBillSignedByGovornor, isBillFailedByGovornor} from '../Util/helper'


const Card = ({ title, identifier, jurisdiction, actions, sources  }) => {

  return (

<div className="p-2 ">



<div className=" p-2 w-full lg:flex justify-center">
  <div className="max-w-md shadow-xl mx-1 my-1 border-r border-b border-l border-gray-400  border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-sm  flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={"https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_" + jurisdiction +".svg"} alt={"Flag of" + jurisdiction} />

        <div className=" text-center py-4 lg:px-4">
 
      <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <p className="font-semibold mr-2 text-left flex-auto">{jurisdiction} - {identifier}</p>

  </div>
  <div className="flex mt-3"> 


  
   {isBillNew (getBillIntroduction(actions)) === true ?   <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>: " "} 
   {isBillSignedByGovornor(actions) ?   <span className="flex rounded-full bg-green-300 text-green-700 uppercase px-2 py-1 text-xs font-bold mr-3">Passed</span>: " "} 
   {isBillFailedByGovornor(actions) ? <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Failed</span>: " "} 
   {isUpdateMajor(actions) ? <a href="https://www.google.com/" className="flex rounded-full text-indigo-700 bg-indigo-100 uppercase px-2 py-1 text-xs font-bold mr-3"> Major</a> : " "}
  </div>
</div>
      </div>
  
    <Progress actions ={actions}/> 
    </div>
    <div className="flex items-center">
      <div className="text-sm border-t border-grey p-4 pin-b ">

<div className="flex"> 
        <span className=" pl-1"> 
        <svg className="fill-current text-gray-500 w-5  h-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"/></svg>
        </span>
        <span className="f6 db pv1 text-gray-700 mb-3 leading-snug  break-all truncate-custom "> {sentenceCase(title)}</span>
</div>

<div className="flex">       
        <span className="mb-3 p-1 p-1"> 
        <svg className="fill-current text-gray-500 w-5  h-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/></svg>
        </span>
        <p className="text-gray-700 leading-none mr-2 mb-3 leading-snug">Last activity posted on <time>{format(new Date(actions[actions.length - 1].date),'MM/dd/yyyy')}</time> - <span className="bg-blue-100 mb-3 f6 db pv2 "> {sentenceCase(actions[actions.length - 1].description)}</span></p>
</div>

<div className="flex"> 
        <span> 
        <svg className="fill-current text-gray-500 w-5  h-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg>
        </span>

        <div> 
<p className="text-gray-700">{jurisdiction}  bill source(s)</p>

  <ul className=" text-gray-700 list-inside">

{sources.map((u, i)=>{
 

//  return (<li key={i}>{u.url}</li>)
return (<li key={i}> <a href={u.url} target="_blank" rel="noopener" className="no-underline">Link ({i+1})</a> </li>)

})}
    {/* <StateLinks action ={actions}/>  */}
  </ul>

</div>

</div>
      </div>
    </div>
  </div>
</div>
  
</div>
  )
 
}

export default Card



