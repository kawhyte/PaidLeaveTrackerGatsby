import React from 'react'
import addDays from 'date-fns/addDays'
import  differenceInDays from 'date-fns/differenceInDays'
import  parseJSON from 'date-fns/parseJSON'
import format from 'date-fns/format'
import sideImg from '../layouts/img/New_Mexico.jpg'
import Progress from './progressBar'

const Card = ({ title, identifier, jurisdiction,actions  }) => {

 ////LOGIC TO CHECK IF BILL IS NEW //////
let futureDate = addDays(new Date(Date.now()), 7)
 let billDateDifference = differenceInDays(
    futureDate,
    new Date(parseJSON("2020-04-03 11:02:32.289671+00:00"))
  );


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
        value.classification.includes("withdrawal") ||
        value.classification.includes("failure") ||
        value.classification.includes("became-law") ||
        value.classification.includes("amendment-passage") ||
        value.classification.includes("amendment-failure") ||
        value.classification.includes("executive-receipt") ||
        value.classification.includes("executive-signature") ||
        value.classification.includes("executive-veto") ||
        value.classification.includes("executive-veto-line-item") ||
        value.classification.includes("veto-override-passage") ||
        value.classification.includes("veto-override-failure") ||
        Object.values(value.description).includes("governor") ||
        Object.values(value.description).includes("executive") 
    );

  console.log("jurisdiction ", jurisdiction)
  console.log("actions.lengton 2 ", format(new Date(actions[0].date),'MM/dd/yyyy'))
  // console.log("actions.lengton ", format(new Date(parseJSON(actions[0].date)),'MM/dd/yyyy'))
//  console.log("statusColor ", jurisdiction, identifier, statusColor [actions[actions.length-1].classification[0]].color)


  return (

<div className="bg-red-100">



<div className="max-w-sm w-full lg:max-w-full lg:flex m-5">
  {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url("+ sideImg + ")"}} title={jurisdiction}>
  </div> */}
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-sm text-gray-600 flex items-center">
   
      <img className="w-10 h-10 rounded-full mr-4" src={"https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_" + jurisdiction +".svg"} alt={"Flag of" + jurisdiction} />

        <div className=" text-center py-4 lg:px-4">
  <p className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
   {billDateDifference > 14 ?   <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>: " "} { !isMajorUpdate ? <a href="https://www.google.com/" className="flex rounded-full text-indigo-700 bg-indigo-100 uppercase px-2 py-1 text-xs font-bold mr-3">Major Update</a> : " "}
  
    <span className="font-semibold mr-2 text-left flex-auto">{jurisdiction} - {identifier}</span>
  </p>
</div>
      </div>
  
    <Progress></Progress>
    </div>
    <div className="flex items-center">
      <div className="text-sm border-t border-grey p-4 pin-b ">
        <p className="f6 db pv1 text-gray-700 mb-3 ">  {sentenceCase(title)}</p>
        <p className=""></p>
        <p className="text-gray-700 leading-none mr-2 mb-3 ">Last activity posted on <time>{actions[actions.length - 1].date}</time> - <span className="bg-blue-100 mb-3 f6 db pv2 "> {sentenceCase(actions[actions.length - 1].description)}</span></p>
       


        <p className="text-gray-700">State Website</p>
      </div>
    </div>
  </div>
</div>












  
</div>




  )
 
}

export default Card
