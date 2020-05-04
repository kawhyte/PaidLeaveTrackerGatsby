import React from 'react'

function billSource({sources}) {
    return (
        <>
        <ul className=" flex text-blue-700 list-inside">
        {sources.map((link, i)=>{

            return (<li key={i}> <a href={link.url} target="_blank" rel="noopener" rel="noopener noreferrer" className="mr-3 flex-auto text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle no-underline"> {i+1}</a> </li>)
            
                })}
        </ul> 
        </>
    )
}

export default billSource
