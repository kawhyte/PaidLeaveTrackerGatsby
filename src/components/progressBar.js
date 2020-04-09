


import React from 'react'



const Progress = () => {

return( 

<div className="relative pt-1">
<div class="flex text-xs content-center text-center">
		<div class="w-1/4">
			Introduced
		</div>
		
		<div class="w-1/4">
			House
		</div>
		
		<div class="w-1/4">
			Senate
		</div>
		
		<div class="w-1/4">
			Governor
		</div>			
	</div>





  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-teal-200">
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
  </div>

	
	<div class="flex text-xs content-center text-center">
		<div class="w-1/4">
			4/2/2020
		</div>
		
		<div class="w-1/4">
		6/9/2020
		</div>
		
		<div class="w-1/4">
		7/12/2020
		</div>
		
		<div class="w-1/4">
		9/29/2020
		</div>			
	</div>
</div>
)
}

export default Progress