import React from 'react'
import format from 'date-fns/format'
import {getBillIntroduction, getBillActions, didBillPassHouse, didBillPassSenate, didBillPassGovernor, didBillFailGovernor} from '../Util/helper'


let senateBillPassed =" "
let governorBillPassed =" "
let billIntroduction =" "
let firstAction = " "
let houseBillPassed = " "

const Progress = ({actions}) => {
	
billIntroduction = getBillIntroduction(actions)
houseBillPassed = didBillPassHouse(actions)
senateBillPassed = didBillPassSenate(actions)
governorBillPassed = didBillPassGovernor(actions)
firstAction = getBillActions(actions)
let billFailed = didBillFailGovernor(actions)


return( 

<div className="relative pt-1 mx-4">
<div className="flex text-xs content-center text-center">
		<div className="w-1/4 mr-3 text-gray-700">
			Introduced
		</div>
		
		<div className="w-1/4 text-gray-700">
			House
		</div>
		
		<div className="w-1/4 mr-2 text-gray-700">
			Senate
		</div>
		
		<div className="w-1/4 text-gray-700">
		{billFailed !== null  ? "Bill Failed" : "Became Law"}
		</div>			
	</div>

	{/* {billFailed !==null ? <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-pink-200">: "" } */}
	{billFailed !== null  ? <div style={{ width: "100%" }} className=" overflow-hidden h-2 mb-1 text-xs rounded shadow-none text-red-700 flex flex-col text-center whitespace-nowrap justify-center  bg-red-300"></div> :
	
	
	<div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
	 
    <div style={{ width: "25%" }} className={"shadow-none text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center bg-blue-500 "}></div>

    {houseBillPassed !== null  ? <div style={{ width: "25%" }} className="shadow-none text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center  bg-indigo-500"></div> : <div style={{ width: "25%" }} className="shadow-none text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center"></div>} 
    {senateBillPassed !==null  ? <div style={{ width: "25%" }} className="shadow-none  text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center bg-green-500"></div>: <div style={{ width: "25%" }} className="shadow-none  text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center"></div> }
	{governorBillPassed !== null ? <div style={{ width: "25%" }} className="shadow-none text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center bg-teal-500"></div> : <div style={{ width: "25%" }} className="shadow-none  text-gray-700 flex flex-col text-center whitespace-nowrap  justify-center"></div>}
 </div>} 

	
	<div className="flex text-xs content-center text-center tracking-tighter">
		<div className="w-1/4">
		{billIntroduction !== null ?  format(new Date(billIntroduction[0].date.substring(0,10)),'LLL d, yyyy') :  format(new Date(firstAction[firstAction.length - 1].date),'LLL dd, yyyy')}
		</div>
		
		<div className="w-1/4">

		{houseBillPassed !== null ? format(new Date(houseBillPassed[0].date.substring(0,10)),'LLL d, yyyy') : " "}
		
		</div>
		
		<div className="w-1/4">
		{senateBillPassed !==null ? format(new Date(senateBillPassed[0].date.substring(0,10)),'LLL d, yyyy') : " "}

		</div>
		
		<div className="w-1/4">
		{billFailed !== null  ? format(new Date(billFailed[0].date.substring(0,10)),'LLL d, yyyy')  :

		governorBillPassed !== null ? format(new Date(governorBillPassed[0].date.substring(0,10)),'LLL d, yyyy')   : " "}

		</div>			
	</div>
</div>
)
}

export default Progress