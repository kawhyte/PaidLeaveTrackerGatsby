import React from 'react'
import isValid from 'date-fns/isValid'
import addDays from 'date-fns/addDays'
import  differenceInDays from 'date-fns/differenceInDays'
import  parseJSON from 'date-fns/parseJSON'
import format from 'date-fns/format'

let dateStringLength = 0;
let actionDate = " "

const Progress = ({actions}) => {
	

	// console.log("LENGTH ",(actions[actions.length - 1].date).length)
	// console.log("actions[0].date ", format(new Date(actions[0].date),'MM/dd/yyyy'))

	// console.log("Is this valid ? ",isValid(new Date((actions[actions.length - 1].date).length)))

// CHECK IF DATE VALID
 dateStringLength = (actions[0].date).length
 actionDate = format(new Date(actions[0].date),'MM/dd/yyyy')
//  if (dateStringLength > 10) {
// 	actionDate = format(new Date(actions[0].date),'MM/dd/yyyy')
//  } else {
// 	actionDate = actions[0].date;
//  }

console.log("action DAte", actionDate)

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





  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-teal-200">
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
  </div>

	
	<div className="flex text-xs content-center text-center">
		<div className="w-1/4">
		{actions.length > 0 ? actionDate : " "}
		</div>
		
		<div className="w-1/4">
		add date
		</div>
		
		<div className="w-1/4">
		add date
		</div>
		
		<div className="w-1/4">
		add date
		</div>			
	</div>
</div>
)
}

export default Progress