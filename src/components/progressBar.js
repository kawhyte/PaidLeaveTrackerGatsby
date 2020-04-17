import React from 'react'
import format from 'date-fns/format'
import {getBillIntroduction,didBillPassHouse,didBillPassSenate,didBillPassGovernor, sentenceCase,isBillNew, isUpdateMajor, isBillSignedByGovornor, isBillFailedByGovornor} from '../Util/helper'
import { parseJSON } from 'date-fns'

let houseBillPassed = " "
let senateBillPassed =" "
let governorBillPassed =" "
let introDate = " "

const Progress = ({actions}) => {
	
	houseBillPassed = didBillPassHouse(actions)
	senateBillPassed = didBillPassSenate(actions)
	governorBillPassed = didBillPassGovernor(actions)

	if ((actions[0].date).length > 10) {
		introDate = format(new Date(parseJSON(actions[0].date)),'LLL d, yyyy')
		console.log(introDate)
	} else {
		introDate =  format(new Date(introDate),'LLL d, yyyy')
		console.log("No format ", format(new Date(introDate),'LLL d, yyyy'))
	 }
	
	// let billPassed = actions.filter(house => {
	// 	let found = false;
	// 	house.classification.forEach(element => {
	// 	  if (element === "passage" || 
	// 	  element === "failure" || 
	// 	  element === "introduction" || 
	// 	  element === "withdrawal" || 
	// 	  element === "executive-veto" || 
	// 	  element === "veto-override-passage " || 
	// 	  element === "veto-override-failure" || 
	// 	  element === "executive-signature") {
	// 		found = true;
	// 	  }
	// 	});
	// 	return found;
	//   });

	

return( 

<div className="relative pt-1 mx-4">
<div className="flex text-xs  content-center text-center">
		<div className="w-1/4 mr-3">
			Introduced
		</div>
		
		<div className="w-1/4">
			House
		</div>
		
		<div className="w-1/4 mr-2">
			Senate
		</div>
		
		<div className="w-1/4">
			Governor
		</div>			
	</div>


  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
    <div style={{ width: "25%" }} className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 "}></div>{" "}
    { houseBillPassed ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  bg-indigo-500"></div>: ""} 
    { senateBillPassed ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>: ""}
	{governorBillPassed ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div> : ""}
 </div>

	
	<div className="flex text-xs content-center text-center tracking-tighter">
		<div className="w-1/4">
		{introDate ? introDate : " "}
		</div>
		
		<div className="w-1/4">
		{houseBillPassed  ? houseBillPassed   : " "}
		
		</div>
		
		<div className="w-1/4">
		{senateBillPassed ? senateBillPassed : " "}

		</div>
		
		<div className="w-1/4">
		{governorBillPassed ? governorBillPassed : " "}

		</div>			
	</div>
</div>
)
}

export default Progress