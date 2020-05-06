import React from "react";




const ListGroup = props => {
    const { onChange } = props;
    
    return  (
<>
        <label  id="lbl-main-menu-mob"></label>
        <select id="lbl-main-menu-mob" aria-label="lbl-main-menu-mob" type="text" name="filter" onChange ={(e)=> onChange(e )}
            className="sm:ml-3 appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 sm:border-r border-r border-l border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            <option defaultValue="all" value="all" >All</option>
            <option value="new">New</option>
            <option value="major">Major Update</option>
            <option value="passed">Became Law</option>
            <option value="failed">Failed</option>
        </select>
        
        <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>

</>
    )
  };
  
  export default ListGroup;
  