import React from 'react'
import addDays from 'date-fns/addDays'
import  differenceInDays from 'date-fns/differenceInDays'
import  parseJSON from 'date-fns/parseJSON'
import format from 'date-fns/format'
import Progress from './progressBar'
let introductionDate = " "


const Table = ({ title, identifier, jurisdiction, actions, sources  }) => {

    let sorted = actions.sort((a, b) => parseJSON(b.order) - parseJSON(a.order));

    let billIntroduction = actions.filter(h => {
  
          return(h.classification.some( v => v === "introduction" ) )
  
      });
      
  
  
      if (typeof (billIntroduction[0]) !== "undefined" ) {
  
        introductionDate =  billIntroduction[0].date
     
      } 
   ////LOGIC TO CHECK IF BILL IS NEW //////
        let futureDate = addDays(new Date(Date.now()), 15)
        let billDateDifference = differenceInDays(
          futureDate,
          new Date(parseJSON(introductionDate))
        );
        // console.log("billDateDifference ", billDateDifference)
  
  
    /// Format to Sentence Case
    function sentenceCase(string) {
  
     let  lowercaseTitle = string.toLowerCase();
     return ( lowercaseTitle[0].toUpperCase() +
      lowercaseTitle.substring(1))
  
   }
  // sentenceCase(testString.toLowerCase());
  
   ///LOGIC TO CHECK IF BILL IS IMPORTANT //////
   let   isMajorUpdate = actions.some(
        value =>
          value.classification.includes("executive-receipt") ||
          value.classification.includes("executive-veto") ||
          value.classification.includes("veto-override-passage") ||
          value.classification.includes("executive-veto-line-item") ||
          Object.values(value.description).includes("governor") ||
          Object.values(value.description).includes("executive") 
      );
  
  
  
  
    let didBillPass = actions.some(
      value => value.classification.includes("became-law") ||
      value.classification.includes("executive-signature")
  
    )
  
    let didBillFail = actions.some(
      value => value.classification.includes("executive-veto") ||
      value.classification.includes("veto-override-failure")
  
    )
    // console.log("actions.lengton 2 ", format(new Date(actions[0].date),'MM/dd/yyyy'))
    // console.log("actions.lengton ", format(new Date(parseJSON(actions[0].date)),'MM/dd/yyyy'))
  //  console.log("statusColor ", jurisdiction, identifier, statusColor [actions[actions.length-1].classification[0]].color)
  
  // var result = isValid(new Date(actions[actions.length - 1].date))
  
  // console.log("Is valid ", result)
    return (


        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full"
                        src={"https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_" + jurisdiction +".svg"} alt={"Flag of" + jurisdiction}
                         />
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 wrap">
                    {jurisdiction} 
                    </p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{identifier}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white-200 text-sm">

<Progress actions ={actions}/> 

  <div className="inline-flex items-center bg-gray-400">
</div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">


<div className="flex ml-4" > 

<span className="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle">Passed</span>
<span className="text-sm font-medium bg-red-100 py-1 px-2 rounded text-red-500 align-middle">Failed</span>
<span className="text-sm font-medium bg-red-100 py-1 px-2 rounded text-yellow-500 align-middle">Pending</span>
<span className="text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle">New</span>

  
  </div>

        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
            <time>{format(new Date(actions[actions.length - 1].date),'LLL dd, yyyy')}</time>
            </p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">

    {sources.map((u, i)=>{
 
        return (<span key={i} className="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle" > <a href={u.url} target="_blank" rel="noopener noreferrer" className="no-underline">Link ({i+1})</a> </span>)
 
      })}

            </p>
        </td>
    </tr>
    
    )
}
export default Table






