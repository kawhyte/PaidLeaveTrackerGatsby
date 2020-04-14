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
                    {jurisdiction} - {identifier} - {title}
                    </p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                May 21, 2020
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white-200 text-sm">

        
           

<Progress actions ={actions}/> 

  <div className="inline-flex items-center bg-gray-400">

  
 

  {/* <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
     House 
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right ml-2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
   
  </div>
  <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
     Senate 
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right ml-2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
   
  </div>
  <div
    class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-archive mr-2"
    >
      <polyline points="21 8 21 21 3 21 3 8"></polyline>
      <rect x="1" y="3" width="22" height="5"></rect>
      <line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
   Governor
  </div> */}

 
</div>








        </td>
    </tr>
    
    )



}
export default Table






