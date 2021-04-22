import React from 'react'
import Footer from '../footer';

const statsGroup = props => {

    const { billTotal, newBills, passBills, failedBills } = props;

    return (
        <>
        <div className="md:mx-28 mx- md:my-10 p-2 ">
			<div className='grid grid-cols-2 gap-2   mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  px-10  py-2 mr-2 text-sm font-medium text-gray-600'>
				<div className='p-5 flex flex-col justify-center items-center align-middle bg-indigo-200 rounded shadow-sm'>
					<div className=' text-xs text-black uppercase font-normal'>
						Total Bills
					</div>
					<div className='flex flex-col items-center pt-1'>
						<div className='text-2xl font-bold text-gray-900 mb-2 '>{billTotal}</div>

						{/*<span className='flex items-center  font-light px-2 mx-2 text-sm text-green-600 bg-green-100 rounded-full'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-3 w-3'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 7l4-4m0 0l4 4m-4-4v18'
									/>
								</svg>
							</span>
							<span className="text-xs"> 5 bills added</span>
						</span>*/}
						{/*<span className='text-xs flex  mt-2 font-light px-2 mx-2   '>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 mr-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
							<span className="text-xs"> 5 mins ago</span>
						</span>*/ }
					</div>
				</div>
				<div className='p-5 flex flex-col justify-center items-center align-middle bg-indigo-100  rounded shadow-sm'>
					<div className='text-xs text-black uppercase font-normal'>
						Major Update 
					</div>
					<div className='flex flex-col items-center pt-1'>
						<div className='text-2xl font-bold text-gray-900 mb-2 '>{passBills}</div>

					{/*	<span className='flex items-center  font-light px-2 mx-2 text-sm text-green-600 bg-green-100 rounded-full'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-3 w-3'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 7l4-4m0 0l4 4m-4-4v18'
									/>
								</svg>
							</span>
							<span className="text-xs"> 2 bills added</span>
					</span>*/}
						{/*<span className='text-xs flex  mt-2 font-light px-2 mx-2   '>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 mr-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
							<span className="text-xs"> 5 mins ago</span>
						</span>*/}
					</div>
				</div>
				<div className='p-5 flex flex-col justify-center items-center align-middle bg-yellow-300 rounded shadow-sm'>
					<div className='text-xs text-black uppercase font-normal'>
						New Bills
					</div>
					<div className='flex flex-col items-center pt-1'>
						<div className='text-2xl font-bold text-gray-900 mb-2 '>{newBills}</div>

						{/*<span className='flex items-center  font-light px-2 mx-2 text-sm text-green-600 bg-green-100 rounded-full'>
					
							<span className="text-xs"> Viewing page 5 of {resolvedData.pagination.max_page}</span>
				</span>*/}
						<span className='text-xs flex  mt-2 font-light px-2 mx-2   '>
							{/*<span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						  </svg>
                            </span>*/}
							{/*<span className="text-xs"> 5 mins ago</span>*/ }
						</span>
					</div>
				</div>
				<div className='p-5 flex flex-col justify-center items-center align-middle bg-red-300 rounded shadow-sm'>
					<div className='text-xs text-black uppercase font-normal'>
						Failed Bills
					</div>
					<div className='flex flex-col items-center pt-1'>
						<div className='text-2xl font-bold text-gray-900 mb-2 '>{failedBills}</div>

						{/*<span className='flex items-center  font-light px-2 mx-2 text-sm text-green-600 bg-green-100 rounded-full'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-3 w-3'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 7l4-4m0 0l4 4m-4-4v18'
									/>
								</svg>
							</span>
							<span className="text-xs"> 1 bills added</span>
			</span>*/}
						{/*<span className='text-xs flex  mt-2 font-light px-2 mx-2   '>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 mr-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
							<span className="text-xs"> 5 mins ago</span>
						</span>*/ }
					</div>
				</div>
				

				{/* <ListGroup items = {sorted}  onChange={handleDropdownChange} />  */}
			</div>
<Footer />
			
		</div>
    </>
    )
}

export default statsGroup;