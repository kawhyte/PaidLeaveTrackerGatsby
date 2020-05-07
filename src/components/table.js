import React from 'react'

function table({tableComponent, onSort}) {
    return (
        <div className="py-2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-5 py-4 overflow-x-auto">
            <div className="inline-block  shadow rounded-lg overflow-hidden">
                <table className="table-fixed ">
  
                <thead>
                        <tr>
                        <th onClick={()=> onSort('state')}
                                className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                State/Bill ID
                            </th>
                            <th onClick={()=> onSort('title')}
                                className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                bill title
                            </th>
                            <th onClick={()=> onSort()}
                                className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Bill Progression
                            </th>
                            <th onClick={()=> onSort('status')}
                                className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Bill Status
                            </th>
                            <th onClick={()=> onSort('lastUpdated')}
                                className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Last Update
                            </th>
                            <th onClick={()=> onSort()}
                                className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Sources
                            </th>
                         
                        </tr>
                    </thead>
                    
                    <tbody>
                        {tableComponent}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default table
