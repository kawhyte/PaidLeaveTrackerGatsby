import React, {useState} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import Table from './table'
import {getBillIntroduction, sentenceCase,isBillNew, isUpdateMajor, isBillSignedByGovornor, isBillFailedByGovornor} from '../Util/helper'


const CardList = function () {

  const data = useStaticQuery(graphql`
  query {
    OpenState{ 
           bills(first: 100, searchQuery:"\\\"paid family leave\\\"" , updatedSince: "2019-06-15") {
        edges {
          node {
            identifier
            title
            classification
            updatedAt
            createdAt
            legislativeSession {
              identifier
              jurisdiction {
                name
              }
            }
            actions {
              order
              date
              description
              classification
              organization{
                classification
                foundingDate
                name
                image
                updatedAt
                createdAt
                            }
            }
            
            sources {
              url
                
            }
          }
        }
      }
    }
  }

  `)


  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: data.OpenState.bills.edges,
    query: emptyQuery,
  })

  const [clicked, setClicked] = useState("Card");

  function handleSwitchView() {
    clicked === "Table" ? setClicked("Card") : setClicked("Table") 
  }

  const handleInputChange = (event) => {
    const query = event.target.value
    console.log("event.target.value", event.target.value )
    
    const posts = data.OpenState.bills.edges || []
    
    const filteredData = posts.filter(post => {
      
      const { identifier, legislativeSession } = post.node
      return (
        
        identifier.replace(/\s+/g, "").toLowerCase().includes(query.toLowerCase()) 
        // ||
        //  title.toLowerCase().includes(query.toLowerCase()) 
        ||
        (legislativeSession.jurisdiction.name && legislativeSession.jurisdiction.name
          .toLowerCase()
          .includes(query.toLowerCase()))
          )
        })
        
        setState({
          query, 
          filteredData 
        })
      }
      
      const handleDropdownChange = (event, jsonData)  =>{
        const query = "Employment"//event.target.value
      console.log("event  ", event.target.value )
      console.log("JsonDFata  ", jsonData )


          const posts = jsonData || []
          console.log("posts ", posts )

          
          // console.log("Hey ", filteredData)
          // console.log("actions ", isBillNew (getBillIntroduction(c.node)))
          // console.log("NEW- ", posts.actions.includes())
       const filteredData = posts.filter(post => {
            
      
        // const {actions} = post.node
        // console.log("AAAAAA",post.node.actions.organization.classification.includes("executive"))
        // let test = isUpdateMajor(actions)
        let test = post.node.actions.filter(obj=>obj.organization.classification==="executive")
        // console.log("AAAAAA",test)

     
        return ( 
          test
          // post.node.actions.filter(obj=>obj.organization.classification==="executive")
          
          
         
          //title.toLowerCase().includes(query.toLowerCase())
      // //console.log( "Post",  isUpdateMajor(post.node.actions))
      // post.node.actions.includes(isUpdateMajor(post.node.actions)===true)
      //       //   identifier.replace(/\s+/g, "").toLowerCase().includes(query.toLowerCase()) 
      //       //   // ||
      //       //   //  title.toLowerCase().includes(query.toLowerCase()) 
      //       //   ||
      //       //   (legislativeSession.jurisdiction.name && legislativeSession.jurisdiction.name
      //       //      .toLowerCase()
      //       //      .includes(query.toLowerCase()))
            )
      //    //})
        
      })
       setState({
         query, 
         filteredData: filteredData
       })
       }  
  
  const { filteredData } = state
  
  console.log("filteredData outside",filteredData)


  const renderView = ()=>{
    if(clicked === "Table"){
      return <div className="py-2">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-5 py-4 overflow-x-auto">
                <div className="inline-block  shadow rounded-lg overflow-hidden">
                    <table className="table-fixed ">
      
                    <thead>
                            <tr>
                            <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    State/Bill ID
                                </th>
                                <th
                                    className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    bill title
                                </th>
                                <th
                                    className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bill Progression
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bill Status
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Last Update
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Sources
                                </th>
                             
                            </tr>
                        </thead>
                        
                        <tbody>
                            {tableComponent}

                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    } else{
      return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{cardComponent}</div>
    }
  }

  const cardComponent = filteredData.map((b, i) => {
    return (
      <Card
        key={i}
        title={b.node.title}
        identifier={b.node.identifier}
        jurisdiction={b.node.legislativeSession.jurisdiction.name}
        createdAt={b.node.createdAt}
        sources={b.node.sources}
        actions={b.node.actions}
      />
    )
  })


  const tableComponent = filteredData.map((b, i) => {
    return (
      <Table
        key={i}
        title={b.node.title}
        identifier={b.node.identifier}
        jurisdiction={b.node.legislativeSession.jurisdiction.name}
        createdAt={b.node.createdAt}
        sources={b.node.sources}
        actions={b.node.actions}
      />
    )
  })



return (
    < div className="ml-16 mr-16">

      <div className="py-8 ">

<h2 className="mx-5 text-2xl font-semibold leading-tight">Filter</h2>

<div className="my-2 mx-5 mb-5 flex sm:flex-row flex-col">
<div className="flex  flex-row mb-1 sm:mb-0">

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
    <div className="relative">
        <select onChange={(e)=> handleDropdownChange(e, filteredData)}
            className="sm:ml-3 appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 sm:border-r border-r border-l border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            <option defaultValue="all" value="all" >All</option>
            <option value="major">Major Update</option>
            <option value="new">New</option>
            <option value="passed">  Passed</option>
            <option value="failed">Failed</option>
        </select>
        <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
</div>

      <div className="mt-0 mx-5 flex lg:flex-shrink-0 lg:mt-3">

        <button onClick={handleSwitchView} className= "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4">
        Switch to {clicked === "Table" ? "Card": "Table" } view
        </button>
      </div>


</div>


    <div className="flex ml-4 mt-4" > 
      <span className="text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle">{filteredData.length} bills found</span>
      <span className="text-sm font-medium bg-red-100 py-1 px-2 rounded text-yellow-500 align-middle"> XX Major Updates</span>
      <span className="text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle">XX New bills</span> 
      <span className="text-sm font-medium bg-red-100 py-1 px-2 rounded text-red-500 align-middle">XX Failed bills</span>
    </div>


    {renderView()}
    
  
    </div>
  )
}

export default CardList
