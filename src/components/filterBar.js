
import React, { useState }from 'react'
import { Link } from 'gatsby'


const FilterBar = (props) => {
    const emptyQuery = ""
    const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery,
    })

  

    const handleInputChange = event => {
        const query = event.target.value
 console.log("event.target.value is ", event.target.value)
console.log("POST ",props)
        const { data } = props
        //console.log("POST ",props)
        // this is how we get all of our posts
        // const posts = data.allMarkdownRemark.edges || []
        const posts = data || []
 

         // return all filtered posts
        const filteredData = posts.filter(post => {
          // destructure data from post frontmatter
          const { identifier, title, legislativeSession } = post.node
          return (
            // standardize data with .toLowerCase()
            // return true if the description, title or tags
            // contains the query string
            identifier.toLowerCase().includes(query.toLowerCase()) ||
            title.toLowerCase().includes(query.toLowerCase()) ||
            (legislativeSession && legislativeSession
              .join("") // convert tags from an array to string
              .toLowerCase()
              .includes(query.toLowerCase()))
          )
        })
        // update state according to the latest query and results
        setState({
          query, // with current query string from the `Input` event
          filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
        })
      }

      const { filteredData, query } = state

      console.log("filteredData", filteredData)

return(


<div className="py-8">

<h2 className="text-2xl font-semibold leading-tight">Filter</h2>

<div className="my-2 mb-5 flex sm:flex-row flex-col">
<div className="flex flex-row mb-1 sm:mb-0">
    <div className="relative">
        <select
            className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
        </select>
        <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
    <div className="relative">
        <select
            className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            <option>All</option>
            <option>Gov</option>
            <option>New</option>
            <option>Pass</option>
            <option>Failed</option>
        </select>
        <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
</div>
<div className="block relative">
    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
            <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
            </path>
        </svg>
    </span>
    <input type ="text"
    aria-label ="Search"
    placeholder="Filter by State or Bill ID" onChange={handleInputChange}
    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
</div>
</div>




<div className="mt-0 flex lg:flex-shrink-0 lg:mt-3">

<button>
<Link
className={
  "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4"
}
to="/"
>
Card View</Link>
</button>
<button>
<Link
className={
  "font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out py-2 px-4 py-2 px-4 "
}
to="/tableview"
>
Table View </Link>
</button>

    </div>

</div>
)
}

export default FilterBar