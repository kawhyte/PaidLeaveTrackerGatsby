import React from 'react'
import  parseJSON from 'date-fns/parseJSON'
import format from 'date-fns/format'


let introductionDate = " "
let houseDate = " "
let senateDate = " "
let govDate = " "

const Progress = ({actions}) => {

	 let sorted = actions.sort((a, b) => parseJSON(b.order) - parseJSON(a.order));


	
	let billPassed = actions.filter(house => {
		let found = false;
		house.classification.forEach(element => {
		  if (element === "passage" || 
		  element === "failure" || 
		  element === "introduction" || 
		  element === "withdrawal" || 
		  element === "executive-veto" || 
		  element === "veto-override-passage " || 
		  element === "veto-override-failure" || 
		  element === "executive-signature") {
			found = true;
		  }
		});
		return found;
	  });

	let billIntroduction = actions.filter(h => {

		return(h.classification.some( v => v === "introduction" ) )

	  });

	let houseBillPassed = actions.filter(h => {

		return( h.organization.classification.includes("lower")&& h.classification.some( v => v === "passage" ) )

	  });
	let senateBillPassed = actions.filter(h => {

		return( h.organization.classification.includes("upper")&& h.classification.some( v => v === "passage" ) )

	  });

	let governorBillPassed = actions.filter(h => {

		return( h.organization.classification.includes("executive")&& 
		(h.classification.some( v => v === "passage" ) || h.classification.some( v => v === "executive-signature" )  ))

	  });




if (typeof (billIntroduction[0]) !== "undefined" ) {

	 introductionDate =  format(new Date(billIntroduction[0].date),'LLL d, yyyy')

} 
if (typeof (houseBillPassed[0]) !== "undefined" ) {

	houseDate =  format(new Date(parseJSON(houseBillPassed[0].date)),'LLL d, yyyy')
} 

if (typeof (senateBillPassed[0]) !== "undefined" ) {	
	senateDate =  format(new Date(senateBillPassed[0].date),'LLL dd, yyyy')
} 

if (typeof (governorBillPassed[0]) !== "undefined" ) {
	
	govDate =  format(new Date(governorBillPassed[0].date),'LLL dd, yyyy')
} 


// CHECK IF DATE VALID
//  dateStringLength = (actions[actions.length - 1].date).length
 //introductionDate = format(new Date(actions[0].date),'LLL dd, yyyy')


return( 

<div className="relative pt-1 mx-4">
<div className="flex text-xs content-center text-center">
		<div className="w-1/4">
			Introduced
		</div>
		
		<div className="w-1/4">
			House
		</div>
		
		<div className="w-1/4">
			Senate
		</div>
		
		<div className="w-1/4">
			Governor
		</div>			
	</div>


  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
    <div style={{ width: "25%" }} className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"}></div>
    { houseBillPassed.length > 0 ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  bg-orange-500"></div>: ""} 
    { senateBillPassed.length > 0 ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>: ""}
	{governorBillPassed.length> 0 ? <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div> : ""}
 </div>

	
	<div className="flex text-xs content-center text-center tracking-tighter">
		<div className="w-1/4">
		{actions.length > 0 ? introductionDate : " "}
		</div>
		
		<div className="w-1/4">
		{houseBillPassed.length > 0  ? houseDate   : " "}
		
		</div>
		
		<div className="w-1/4">
		{senateBillPassed.length > 0 ? senateDate : " "}

		</div>
		
		<div className="w-1/4">
		{governorBillPassed.length > 0 ? govDate : " "}

		</div>			
	</div>
</div>
)
}

export default Progress