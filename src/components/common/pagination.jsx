import React from 'react'
import _ from "lodash";


const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props

    console.log("ItemCount ", itemsCount)
    console.log("currentPage ", currentPage)
    console.log("pageSize ", pageSize)

    const pagesCount = Math.ceil(itemsCount / pageSize);

    console.log("currentPage ", currentPage)
    // if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);

    return (  


<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-sm leading-5 text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">{pageSize}</span>
        of
            <span className="font-medium">{itemsCount}</span>
        results
      </p>
    </div>
    <div>
      <span className="relative z-0 inline-flex shadow-sm">
{ pages.map( page =>( 

        <button key={page} onClick={() => {onPageChange(page) }}  type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:bg-blue-300  focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
         {page}
        </button>
    
))}
      </span>
    </div>
  </div>
</div>
)
}
 
export default Pagination;